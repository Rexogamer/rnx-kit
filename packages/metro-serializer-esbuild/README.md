<!--remove-block start-->

# @rnx-kit/metro-serializer-esbuild

[![Build](https://github.com/microsoft/rnx-kit/actions/workflows/build.yml/badge.svg)](https://github.com/microsoft/rnx-kit/actions/workflows/build.yml)
[![npm version](https://img.shields.io/npm/v/@rnx-kit/metro-serializer-esbuild)](https://www.npmjs.com/package/@rnx-kit/metro-serializer-esbuild)
![Stability Beta](https://img.shields.io/badge/Stability-Beta-3bf)

<!--remove-block end-->

Allow Metro to use [esbuild](https://esbuild.github.io) for bundling and
serialization.

This tool is in Beta, and has been yielding good results so far. See the list of
known issues below for more information.

## Motivation

Metro currently does not implement tree shaking, i.e. it does not attempt to
remove unused code from the JS bundle. For instance, given this code snippet:

```ts
import { partition } from "lodash";
```

Metro will bundle all of `lodash` in your bundle even though you're only using a
small part of it. In `lodash`'s case, you can add
[`babel-plugin-lodash`](https://github.com/lodash/babel-plugin-lodash#readme) to
your Babel config to help Metro strip away some modules, but not all libraries
will come with such helpers. For more details, see issues
[#227](https://github.com/facebook/metro/issues/227) and
[#632](https://github.com/facebook/metro/issues/632).

metro-serializer-esbuild addresses this by letting esbuild take over bundling.

## Requirements

This plugin currently depends on some unstable features introduced in Metro
[0.66.1](https://github.com/facebook/metro/releases/tag/v0.66.1). Breaking
changes were introduced in Metro 0.60, so this plugin will not work with React
Native below 0.64.

## Usage

esbuild works best when we pass it ES6 modules. The first thing we must do is to
disable import/export transformation by enabling `disableImportExportTransform`
in `babel.config.js`:

```diff
 module.exports = {
   presets: [
     [
       "module:metro-react-native-babel-preset",
+      { disableImportExportTransform: true },
     ],
   ],
 };
```

If you're using `@rnx-kit/babel-preset-metro-react-native`, you can instead set
`esbuild` as transform profile:

```diff
 module.exports = {
   presets: [
     [
       "@rnx-kit/babel-preset-metro-react-native",
+      { unstable_transformProfile: "esbuild" },
     ],
   ],
 };
```

Next, configure Metro to use the esbuild serializer by making the following
changes to `metro.config.js`:

```diff
 const { makeMetroConfig } = require("@rnx-kit/metro-config");
+const {
+  MetroSerializer,
+  esbuildTransformerConfig,
+} = require("@rnx-kit/metro-serializer-esbuild");

 module.exports = makeMetroConfig({
   projectRoot: __dirname,
+  serializer: {
+    customSerializer: MetroSerializer(),
+  },
+  transformer: esbuildTransformerConfig,
 });
```

We can now create a bundle as usual, e.g.:

```sh
react-native bundle --entry-file index.js --platform ios --dev false ...
```

## Known Limitations

- Dev server may not work with this serializer. To work around this limitation,
  you can save the esbuild specific Metro config to a separate file and only
  specify it when needed, e.g.:
  ```sh
  react-native bundle ... --config metro+esbuild.config.js
  ```
- esbuild does not properly tree-shake `export *`. This is a known limitation
  (see https://github.com/evanw/esbuild/issues/1420). It is also not recommended
  to use `export *` in your code as they may lead to duplicate exports. For more
  details, read https://hackmd.io/Z021hgSGStKlYLwsqNMOcg. This can be mitigated
  with an ESLint rule, such as `no-export-all` from
  [`@rnx-kit/eslint-plugin`](https://github.com/microsoft/rnx-kit/tree/main/packages/eslint-plugin#readme).
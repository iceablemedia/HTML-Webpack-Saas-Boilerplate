# HTML-Webpack-Saas-Boilerplate

A simple HTML page boilerplate with some modern devtools.

## Dev tools

At the root of the project:

```
npm install
```

All files can be edited from the `/src` directory.

```
npm run build
```

Builds a development bundle.

```
npm run start
```

Watches files and automatically rebuild a development bundle

```
npm run build:production
```

Builds a ready-for-production bundle with `index.html` in the root directory and all assets in the `/dist` directory.

The whole thing can then be uploaded via FTP as-is (watch out and don't let `/node_modules` sneak into your FTP upload!)

## TODO

Use `webpack-dev-server` with live reloading.

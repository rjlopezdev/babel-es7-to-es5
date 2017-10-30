# Babel project for compile ES7 to ES5
A configuration for ES7 compile to ES5.

## Compile

Use the following command to compile the folder /src on /dist

```
npm run compile
```

## Configuration

This transpile is possible thanks to **.babelrc** config:

```
{
  "presets": [
    "es2015",
    "es2017"
  ],
  "plugins": [
    "transform-runtime"
  ]
}
```

## Applications

You can use this setup project to develop your Node.js projects (Express, Electron...) for coding the latest version of JavaScript avoiding incompatibilities issues.
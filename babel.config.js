module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "targets": {
          "esmodules": true
        }
      }
    ]
  ]
  "plugins": ["@babel/plugin-syntax-dynamic-import"],
};

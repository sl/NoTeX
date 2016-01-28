fs = require("fs");
pkg = require("./package.json");
fs.writeFile("manifest.json", JSON.stringify({
  "name": pkg.name,
  "description": pkg.description,
  "version": pkg.version,
  "manifest_version": 2,
  "sandbox": {
    "pages": ["index.html"]
  },
  "app": {
    "background": {
      "scripts": ["background.js"]
    }
  }
}));
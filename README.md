# grapp
My personal template for webcomponent based no-framework PWAs in 2021
* webpack5
* typescript
* sass
* serviceworker offline first for assets
* babel & autoprefixer for major browser support
* cd using github actions and github pages
* favicons & webmanifest preconfigured
* environment-based variable replacement

# Usage

## Install

First, install [Yeoman](http://yeoman.io) and generator-grapp using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-grapp
```

## Generate an app

```bash
mkdir my-project
cd my-project
yo grapp
```

## Generate a component

```bash
yo grapp:component componentname
```

## Publish
Enable github pages to host the gh-pages branch of your repository. If your app is hosted in a path, you need to adjust it in webpack.config.js.
Eg. if your url would be https://someone.github.io/my-path then:
```js
    const base = {
        "gh-pages": "/my-path",
        "local": "/"
    }[environment];
```
# grapp
My personal template for webcomponent based no-framework PWAs in 2024
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
For now, you need to npm link the github repo, I did not publish on npm yet.

Later, after publish:
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

## Publish to Github pages
You need to create a [Deploy key](https://docs.github.com/en/developers/overview/managing-deploy-keys) under the settings of your repository.
~~~bash
 ssh-keygen -t rsa -b 4096 -C "<your-github-user-name>@github.com"
~~~
Upload the contents of the .pub file as your Deploy key.

Then create a new [Repository Secret](https://docs.github.com/en/actions/reference/encrypted-secrets#about-encrypted-secrets), name it `DEPLOY_KEY` and set its contents to the contents of the id_rsa file from before.

If your app is hosted in a path, you need to adjust it in webpack.config.js.
Eg. if your url would be https://someone.github.io/my-path then:
```js
    const base = {
        "gh-pages": "/my-path/",
        "local": "/"
    }[environment];
```

If your main branch is not called `main`, you may need to change the github action file accordingly.
~~~yaml
on:
  push:
    branches: [ <main-branch-name> ]
~~~

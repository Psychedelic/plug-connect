![](.repo/images/button-banner.png)


# Plug Connnect

The Plug Connect button is a basic React Component button you can use to integrate Plug's Agent features for authenticating a user's identity and requesting access to the Plug Agent to sign requests to your canisters on behalf of that identity.

## 🤔 Installation

```
yarn add @psychedelic/plug-connect
```

To install the package you need to be authenticated to Github via `npm login`, ensure that you have:

- A personal access token (create one [here]((https://github.com/settings/tokens))) with the `repo` and `read:packages` scopes to login to the [GitHub Package Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages).

- Have authenticated via `npm login`, using the **personal access token** as your **password**:

```
npm login --registry=https://npm.pkg.github.com --scope=@Psychedelic
```

## 🎁 Use

Import the PlugConnect package:

```js
import PlugConnect from '@psychedelic/plug-connect';
```

Use the component:

```js
<PlugConnect
  whitelist={['canisterid-1', 'canisterid-2']}
  onConnectCallback={() => console.log("Some callback")}
/>
```

The props `dark`, `host` and `title` are also supported:

```js
<PlugConnect
  dark
  title="My title"
  host="host-example"
  whitelist={['canisterid-1', 'canisterid-2']}
  onConnectCallback={() => console.log("Some callback")}
/>
```

> **Note:** `host` defaults to `https://mainnet.dfinity.network` and `whitelist` defaults to an empty list

Use the storybook as a playground to learn more!

## ⚡ Development

You'll need to have `nodejs` installed, NPM or [YARN](https://yarnpkg.com/) which is the preferred package manager throught this document, feel free to use [NPM](https://www.npmjs.com/) by changing the commands in accordance.

Pull the repository to your local and install the dependencies by:

```zsh
yarn install
```

To start the development server:

```sh
yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

## 📚 Storybook

Then Storybook:

```bash
yarn storybook
```

This loads the stories from `./stories`.

## Repo

[TSDX](https://tsdx.io/) - Zero-config CLI for TypeScript used by this repo. 

![](.repo/images/button-banner.png)


# Plug Connnect

The Plug Connect button, is a basic React Component button you can use to integrate Plug's Agent features for authenticating a user's identity and requesting access to the Plug Agent to sign request to your canisters on behalf of that identity.

## 🤔 Installation

```
npm install @psychedelic/plug-connect
```

To install the package you need to be authenticated to Github via `npm login`, ensure that you have:

- A personal access token (create one [here]((https://github.com/settings/tokens))) with the `repo` and `read:packages` scopes to login to the [GitHub Package Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages).

- Have authenticated via `npm login`, using the **personal access token** as your **password**:

```
npm login --registry=https://npm.pkg.github.com --scope=@Psychedelic
```

## ⚠️ Requirements

You'll need to have `nodejs` installed, NPM or [YARN](https://yarnpkg.com/) which is the preferred package manager throught this document, feel free to use [NPM](https://www.npmjs.com/) by changing the commands in accordance.

Pull the repository to your local and install the dependencies by:

```zsh
yarn install
```

## ⚡ Development

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

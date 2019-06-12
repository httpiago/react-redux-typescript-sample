# react-redux-typescript-sample

A simple app with an initial structure of files and code using the technologies described in the name for you to use to create your webapp quickly.

## Packages and tools used

- [TypeScript](https://www.typescriptlang.org/): To type the code and components.
- [React](https://reactjs.org/): Separate the interface into components.
- [Redux](https://redux.js.org/): Manage the global state of the application.
- [Parcel](https://parceljs.org/) ❤: to bundle the app but it can be refactored to use other packages, such as the [webapack](https://webpack.js.org) or [zero](https://github.com/remoteinterview/zero).
- [faker](https://www.npmjs.com/package/faker): Generate fake data.

## Instalation

```bash
git clone https://github.com/httpiago/react-redux-typescript-sample.git
cd react-redux-typescript-sample
yarn install
```

## Commands

- **`yarn run start`**: Start app on port http://localhost:1234/

## Folder Structure

```
.
├── src
│   ├── components       // Folder with all the components
│   │   ├── App.tsx      // Main component
│   │   ├── Form.tsx
│   │   └ ...
│   ├── store            // Folder with all the redux logic
│   │   ├── ducks
│   │   │   └── todos.ts // File with types, action creators and reducer of todos logic
│   │   ├── index.tsx    // Combine all reducers and create store
│   │   └── types.tsx
│   ├── index.html
│   └── index.tsx        // Main file of the app
├── package.json
├── README.md
├── tsconfig.json        // Typescript compiler configs
└ ...
```

## Duck Pattern

This sample uses [Duck Pattern](https://github.com/erikras/ducks-modular-redux) to structure the redux files logic and consequently make the app simpler. Take a look 😉.

## Redux hooks

Some components use the [new Redux hook api](https://react-redux.js.org/api/hooks), so you can just see how to use them.

## License

MIT

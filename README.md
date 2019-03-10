# Scriber
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](/LICENSE.md)

# Table of Contents
* [Overview](#overview)
* [Development](#development)
    * [Requirements](#requirements)
    * [Contributing](#contributing)
    * [Redux DevTools Extension](#redux-devtools-extension)
* [Codebase](#codebase)
    * [Structure](#structure)

# Overview

# Development
> Information describing how to install and configure all the required tools to begin development

## Requirements
Ensure that you have the following software installed:

- **Git**
    - Version 2.20.1+
- **Node**
    - Version 10.15.0+

## Contributing
Scriber welcomes contributions from anyone and everyone. Please see our [contributing guide](/CONTRIBUTING.md) for more info.

## Redux DevTools Extension
If you want to use the [Redux DevTool Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) for Google Chrome, modify the following section of code in [store.js](/src/store.js).

```diff
const store = createStore(
    rootReducer,
    initialState,
    compose(
-        applyMiddleware(...middlware)
+        applyMiddleware(...middlware),
+        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
```

# Codebase
> Information describing the structure and design of the entire application

## Structure
    .
    ├── ...
    ├── api                     # Backend Rest API server
    ├── public                  # Web page assets
    ├── src                     # Source files
    │   ├── components          # Re-usable react components
    │   ├── pages               # Web app page views
    │   │   ├── ...
    │   │   ├── layout.jsx      # Default page layout
    │   │   ├── routes.jsx      # Page navigation router file
    │   │   └── services.jsx    # API service call functions
    │   ├── redux               # Redux components
    │   │   ├── actions         # Redux actions
    │   │   ├── reducers        # Redux application reducers
    │   │   └── store.js        # Redux store
    │   ├── scss                # SASS files
    │   ├── App.jsx             # Main application logic
    │   ├── index.js            # Application Bootstrap
    │   └── serviceWorker.js    # Service worker file
    └── ...

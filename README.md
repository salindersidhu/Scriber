# Scriber
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](/LICENSE.md)

# Table of Contents
* [Development](#development)
    * [Prerequisites](#Prerequisites)
    * [Running](#running)
    * [Contributing](#contributing)
* [Codebase](#codebase)
    * [Structure](#structure)

# Development
> Information describing how to install and configure all the required tools to begin development.

## Prerequisites
Ensure that you have the following installed and configured any environment variables.

- **Git**
    - Version 2.20.1+
- **Node**
    - Version 10.15.0+

*If you're using Google Chrome it is recommended to get the [Redux DevTool Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).*

## Running
Run the following command to install all the required packages:
```bash
npm install
```

Start the API server with live reload using the following command:
```bash
npm run api
```

***Optional:*** Build the HTML API documentation using the following command:
```bash
npm run api:docs
```

Start the React application server with live reload using the following command:
```bash
npm start
```

## Contributing
Scriber welcomes contributions from anyone and everyone. Please see our [contributing guide](/CONTRIBUTING.md) for more info.

# Codebase
> Information describing the software architecture and how to maintain it while adding additional functionality.

## Structure
    .
    ├── ...
    ├── public                  # React application assets
    ├── api
    │   ├── controllers         # REST API controllers
    │   ├── models              # REST API DB models
    │   ├── routes              # REST API HTTP routes
    │   ├── docs                # REST API generated docs
    │   ├── config.js           # Server config file handler
    │   ├── config.json         # Server config file for all environments 
    │   ├── index.js            # Main server logic
    │   └── utils.js            # Common utility functions
    ├── src
    │   ├── components          # Re-usable react components
    │   ├── pages               # React application page views
    │   │   ├── ...
    │   │   ├── layout.jsx      # Default page layout
    │   │   ├── routes.jsx      # Page navigation router file
    │   │   └── services.jsx    # API service call functions
    │   ├── redux               # Redux components
    │   │   ├── actions         # Redux actions
    │   │   │   ├── ...
    │   │   │   └── types.js    # Redux action type definitions
    │   │   ├── reducers        # Redux reducers
    │   │   │   ├── ...
    │   │   │   └── index.js    # Root reducer file
    │   │   └── store.js        # Redux store
    │   ├── scss                # SASS files
    │   ├── App.jsx             # React application logic
    │   ├── index.js            # Application bootstrap
    │   └── serviceWorker.js
    └── ...

# Scriber
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](/LICENSE.md)

# Table of Contents
* [Overview](#overview)
* [Development](#development)
    * [Requirements](#requirements)
    * [Contributing](#contributing)
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

# Codebase
> Information describing the structure and design of the application source code

## Structure
    .
    ├── ...
    ├── api                     # Backend Rest API server
    ├── public                  # Web page assets (alternatively `public`)
    ├── src                     # Source files (alternatively `src`)
    │   ├── components          # Re-usable react components
    │   ├── pages               # Web app page views (alternatively `pages`)
    │   ├── scss                # SASS files
    │   ├── App.js              # Main application logic
    │   └── App.scss            # Main application SASS
    │   └── index.js            # Application Bootstrap file
    └── ...
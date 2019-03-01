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
    │   ├── scss                # SASS files
    │   ├── App.jsx             # Main application logic
    │   └── index.jsx           # Application Bootstrap file
    └── ...

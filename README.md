# apiary-cli

Basic Node.js CLI for the [Apiary API](https://apiary.docs.apiary.io/).

## Installing

Clone the repo:

```bash
$ git clone git@github.com:cristidas/apiary-cli.git
```

Change directory to /apiary-cli

```bash
$ cd apiary-cli
```

Install with npm:

```bash
$ npm install -g
```

## Usage

**$ apiary-cli -h**

```bash
  Usage: apiary-cli [options] [command]

  node.js cli for Apiary API

  Options:

    -V, --version                      output the version number
    --api-host [apiHost]               set the API host for current command (default: https://api.apiary.io)
    --bearer [bearer]                  set the authorization token for current command
    -h, --help                         output usage information

  Commands:

    user-api-list                      list own APIs from apiary.io
    publish-blueprint <api-subdomain>  publish the API Blueprint on apiary.io
```

> **NOTE**: To generate the bearer authorization token, follow the official [Apiary documentation](https://apiary.docs.apiary.io/#reference/authentication).

#!/usr/bin/env node
'use strict';

const pickRandom = require('pick-random');
const jsonfile = require('jsonfile');
const getStdin = require('get-stdin');
const meow = require('meow');
const vanillaJar = require('./index.js');

const file = './list.json';

const cli = meow(`
Usage
  $ vanillajar <command> [<options>]

Commands
  new <path>              Creates a new empty jar at given path
  pick <count> <path>     Finds the jar (default: './jar.json') in the given path.

Options
  --help                  Shows the help and instructions

Examples
  $ vanillajar pick .
`);


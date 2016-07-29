#!/usr/bin/env node

var me = require('milli-epoch')
    , ncp = require('copy-paste')
    , argv = require('yargs').argv;

function exit() {
    process.exit(0);
}

if (argv.ms) {
    ncp.copy(me.fromEpoch(me.now()), exit);
} else {
    ncp.copy(me.now(), exit);
}


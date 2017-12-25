const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const clout = require('clout-js');
const express = require('express');

const NODE_ENV = process.env.NODE_ENV || 'development';
const COMPILER_WATCH_OPTIONS = {
    aggregateTimeout: 300,
    poll: true
};

const app = module.exports = {
    compiler: null,
    serverStarted: false,
    onCompilerError(err) {
        console.error(err);
    },
    onCompilerSuccess(stats) {
        let durationInMS = stats.endTime - stats.startTime;
        let duration = durationInMS/1000;
        console.info('successfully build webpack');
        console.info(`duration: ${duration}s`);

        clout.registerHook('start', (next) => {
            clout.app.use(express.static(this.compiler.outputPath));
            next();
        }, 'CONTROLLER');
        clout.registerHook('start', (next) => {
            this.setupSockets();
            next();
        }, 'CONTROLLER');

        this.startServer();
    },
    onCompilerWatch(err, stats) {
        if (err) { this.onCompilerError(err); }
        this.onCompilerSuccess(stats);
    },
    onCompilerRun(err, stats) {
        if (err) { this.onCompilerError(err); }
        this.onCompilerSuccess(stats);
    },
    startServer() {
        if (this.serverStarted) { return; }
        this.serverStarted = true;

        clout.on('started', function () {
            if (clout.server.https) {
                clout.logger.info('https server started on port %s', clout.server.https.address().port);
            }
            if (clout.server.http) {
                clout.logger.info('http server started on port %s', clout.server.http.address().port);
            }
        });

        clout.start();
    },
    initialize() {
        this.compiler = webpack(webpackConfig);
        switch (NODE_ENV) {
            case 'production':
                this.compiler.run((err, stats) => this.onCompilerRun(err, stats));
                break;
            default:
                this.compiler.watch(COMPILER_WATCH_OPTIONS, (err, stats) => this.onCompilerWatch(err, stats));
        }
    },
    setupSockets() {
        clout.sio.sockets.on('connection', function (socket) {
            socket.on('GET_CURRENCY_PRICES', () => {
                socket.emit('CURRENCY_PRICES', {
                    hello: 'world'
                });
            });
        });
    }
};

app.initialize();

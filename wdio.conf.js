import path from 'node:path'

export const config = {
    runner: 'local',

    // Servidor Appium iniciado manualmente com o comando: appium
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        // Caminho absoluto: o servidor Appium não sabe em qual pasta o projeto está
        'appium:app': path.resolve('app', 'wdio.apk')
    }],

    logLevel: 'error',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    }
}

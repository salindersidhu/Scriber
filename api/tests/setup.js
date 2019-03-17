const fs = require('fs');
const path = require('path');
const MongoMemoryServer = require('mongodb-memory-server');

const dbConfigPath = path.join(__dirname, 'db.config.json');

const mongod = new MongoMemoryServer.default({
    autoStart: false
});

module.exports = async () => {
    if (!mongod.isRunning) {
        await mongod.start();
    }

    const mongoConfig = {
        mongoDBName: 'jest',
        mongoUri: await mongod.getConnectionString(),
    };

    // Write global config to disk because all tests run in different contexts.
    fs.writeFileSync(dbConfigPath, JSON.stringify(mongoConfig));

    // Set reference to mongod in order to close the server during teardown.
    global.__MONGOD__ = mongod;
};

const { spawn } = require('child_process');
const path = require('path');

function startServer() {
    console.log(`[${new Date().toLocaleString()}] Starting AnimeInfinity server...`);
    
    const server = spawn(process.execPath, [path.join(__dirname, 'server.js')], {
        cwd: __dirname,
        stdio: 'inherit'
    });

    server.on('exit', (code) => {
        console.log(`[${new Date().toLocaleString()}] AnimeInfinity stopped with code ${code}. Restarting in 5 seconds...`);
        setTimeout(startServer, 5000);
    });

    server.on('error', (err) => {
        console.error(`[${new Date().toLocaleString()}] AnimeInfinity error:`, err);
        setTimeout(startServer, 5000);
    });
}

startServer();
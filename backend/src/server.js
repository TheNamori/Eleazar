const app = require('./app');
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, console.log(`⚡Server running on port ${PORT}`));

const db = require('./database/index');
db.connect();
db.handleLogs();

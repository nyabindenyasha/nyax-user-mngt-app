const express = require('express');

const app = express();

app.use(express.static('./dist/mdb-angular-free'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/mdb-angular-free/'}),
);

app.listen(process.env.PORT || 8080);

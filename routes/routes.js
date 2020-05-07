const appRouter = (app, fs) => {
    const dataPath = './data/movies.json';

    app.get('/movies', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = appRouter;
const express = require('express');
const app = express();
const port = 8080;
const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');
app.use(express.static('public'))
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'planB',
    partialsDir: __dirname + '/views/partials/'
    }));
    fakeApiB = () => 'Faker';
    fakeApi = () => {
        return [
          {
            name: 'Katarina',
            lane: 'midlaner'
          },
          {
            name: 'Jayce',
            lane: 'toplaner'
          },
          {
            name: 'Heimerdinger',
            lane: 'toplaner'
          },
          {
            name: 'Zed',
            lane: 'midlaner'
          },
          {
            name: 'Azir',
            lane: 'midlaner'
          }
        ];
      }
      app.get('/', (req, res) => {
      res.render('main', {layout: 'index', suggestedChamps: fakeApi(), listExists: true, proPlayer: fakeApiB()});
      });
app.listen(port, () => console.log(`App listening to port ${port}`));
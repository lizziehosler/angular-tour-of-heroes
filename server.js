const express = require('express');
const app = express();
app.use(express.static('./dist/angular-tour-of-heroes'));
app.get('/*', function (req, res) {
  res.sendFile('app.component.html', { root: 'dist/angular-tour-of-heroes' }
  );
});
app.listen(process.env.PORT || 8080);
console.log(`Running on port ${process.env.PORT || 8080}`)

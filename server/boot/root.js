module.exports = function(app) {
  // Install a `/` route that returns app status
  var router = app.loopback.Router();
  router.get('/status', app.loopback.status());
  router.get('/', function(req, res){
    res.redirect(app.get('clientRoot'))
  });
  app.use(router);
};

import configManager from '../../app/infra/config-manager';
import routeManager from '../../app/infra/route-manager';
import assetsManager from '../../app/infra/assets-manager';

module.exports = function(server) {
  configManager.handle(server);
  assetsManager.handle(server);
  routeManager.handle(server);
};

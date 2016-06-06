import PATH from 'path';

import loopback from 'loopback';
// import nconf from 'nconf';

import baseManager from './base-manager';

const ROOT = '../';

const assetsManager = Object.assign({}, baseManager, {
    configureDevelopmentEnv(app) {
        const staticFolders = app.get('staticFolders');
        const adjustedFolders = this.adjustStaticFolders(staticFolders, app.get('root'));

        adjustedFolders.forEach(function(folder) {
            app.use(app.get('staticFolderMount'), loopback.static(folder, {
                maxAge: app.get('maxAge')
            }));
        });
    },

    adjustStaticFolders(folders, root) {
        const adjustedFolders = folders.map(function(folder) {
            return PATH.resolve(__dirname, ROOT, folder);
        });

        return adjustedFolders;
    }
});

export default assetsManager;

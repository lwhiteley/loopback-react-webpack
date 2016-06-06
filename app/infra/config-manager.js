import PATH from 'path';
import HBS from 'express-handlebars';
// import nconf from 'nconf';

import baseManager from './base-manager';

const ROOT = '../';

const configManager = Object.assign({}, baseManager, {
    configureDevelopmentEnv(app) {
        app.set('x-powered-by', false);

        app.set('views', PATH.resolve(__dirname, ROOT, app.get('templateRoot')));

        app.engine('hbs', HBS({
            extname:'hbs',
            defaultLayout:'main.hbs',
            layoutsDir: PATH.resolve(__dirname, ROOT, app.get('templateLayouts'))
        }));

        app.set('view engine', 'hbs');
    }
});

export default configManager;

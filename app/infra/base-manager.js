// import nconf from 'nconf';

const baseManager = {
    handle(app) {
        this.configureCommon(app);

        if(app.get('development')) {
            this.configureDevelopmentEnv(app);
        } else {
            this.configureProductionEnv(app);
        }
    },

    configureCommon(/*app*/) {},

    configureProductionEnv(/*app*/) {},

    configureDevelopmentEnv(/*app*/) {}
};

export default baseManager;

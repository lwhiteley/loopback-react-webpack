import FS from 'fs';

// import express from 'express';

import React from 'react'
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';

import baseManager from './base-manager';
import routes from '../routes';

class AugmentedRouterContext extends RouterContext {
    createElement(component, props) {
        const context = this.props.context;
        return component == null ? null : this.props.createElement(component, {...props, ...{context}});
    }
};

const routeManager = Object.assign({}, baseManager, {
    configureDevelopmentEnv(app) {
        const pagesRouter = this.pageRouter(app);
        app.use(app.get('clientRoot'), pagesRouter);
    },

    pageRouter (app){
      return (req, res, next) => {
          match({routes, location: req.originalUrl}, (err, redirectLocation, renderProps) => {
              this.retrieveLatestBills((err, data) => {
                  if(!err) {
                      const html = this.render(renderProps, data);

                      res.render('index', {
                          content: html,
                          context: data
                      });
                  } else {
                      res.status(500).send();
                  }
              });
          });
      };
    },

    retrieveLatestBills(callback) {
        FS.readFile('./app/fixtures/latest-bills.json', 'utf-8', callback);
    },

    render(renderProps, data) {
        const additionalProps = {context: JSON.parse(data)};
        const html = renderToString(
            <AugmentedRouterContext {...renderProps} {...additionalProps}/>
        );

        return html;
    }
});

export default routeManager;

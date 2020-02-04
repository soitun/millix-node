import db from '../../database/database';
import config from './config';
import _ from 'lodash';
import async from 'async';


class _ConfigLoader {
    load() {
        return new Promise(resolve => {
            let dbConfigs = {
                config: {},
                type  : {}
            };
            async.eachSeries(_.keys(config), (configName, callback) => {
                if (configName === 'default' || configName === 'DATABASE_CONNECTION') {
                    callback();
                }
                else {
                    db.getRepository('config')
                      .getConfig(configName)
                      .then(data => {
                          if (data) {
                              let value;
                              switch (data.type) {
                                  case 'string':
                                      value = data.value;
                                      break;
                                  default:
                                      value = JSON.parse(data.value);
                              }
                              config[configName]           = value;
                              dbConfigs.config[configName] = value;
                              dbConfigs.type[configName]   = data.type;
                              callback();
                          }
                          else {
                              let value = config[configName];
                              let type  = typeof value;

                              dbConfigs.config[configName] = value;
                              dbConfigs.type[configName]   = type;

                              if (type !== 'string') {
                                  value = JSON.stringify(value);
                              }

                              db.getRepository('config')
                                .addConfig(configName, value, type)
                                .then(() => callback());
                          }
                      });
                }
            }, () => resolve(dbConfigs));
        });
    }
}


export default new _ConfigLoader();

const { IntermineAPI } = require('./intermine/intermine.api.js');

const dataSources = () => {
  return {
    lisIntermineAPI: new IntermineAPI('https://mines.legumeinfo.org/glycinemine/service'),
  };
};

module.exports = { dataSources };

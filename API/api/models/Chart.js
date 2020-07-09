/**
 * Chart.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    timestamp: {
      type: 'ref',
      columnType: 'timestamp',
      defaultsTo: new Date()
    },
    botId :{
      type: 'string',
      required: true
    },
    count: {
      type: 'number',
      required: true
    }
  },

};


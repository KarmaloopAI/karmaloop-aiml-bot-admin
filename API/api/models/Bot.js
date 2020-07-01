/**
 * Bot.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    IPAddress:{
      type:'string'
    },
    port:{
      type:'number'
    },
    description:{
      type: 'string'
    },
    botName:{
      type:'string'
    },
    groupName:{
      type:'string'
    }

  },

};


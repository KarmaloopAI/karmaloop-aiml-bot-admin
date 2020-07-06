/**
 * Analytics.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    botId: {
      type: 'string',
      required: true,
      unique: true
    },
    botName: {
      type: 'string'
    },
    botReply: {
      type: 'string'
    },
    userReply: {
      type: 'string'
    },
    userId: {
      type: 'string'
    },
    timestamp: {
      type: 'string'
    }
  }

};



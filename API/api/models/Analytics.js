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
      type: 'string',
      required: true
    },
    userReply: {
      type: 'string',
      required: true

    },
    userId: {
      type: 'string',
      required: true
    },
    timestamp: {
      type:'ref',
      columnType: 'timestamp',
      required: true,
      defaultsTo: new Date()
    },
  }

};



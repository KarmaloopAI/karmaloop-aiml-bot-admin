/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /activeBots': 'AnalyticsController.activeBots',
  'GET /totalConversations': 'AnalyticsController.totalConversations',
  'GET /activeChats': 'AnalyticsController.activeChats',
  'GET /botsdescription': 'AnalyticsController.botsdescription',
  'GET /totalconversation': 'AnalyticsController.totalconversation',

};

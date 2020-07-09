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



  'GET /bots': 'BotController.getAllBots',
  'GET /bots/:id': 'BotController.getBotById',
  'POST /bots': 'BotController.submitBotDetails',
  'DELETE /bots/:id': 'BotController.deletBot',
  'PUT /bots/:id': 'BotController.updateBot',

  'GET /activeBots': 'AnalyticsController.activeBots',
  'GET /totalConversations': 'AnalyticsController.totalConversations',
  'GET /activeChats': 'AnalyticsController.activeChats',

  'POST /conversation': 'AnalyticsController.submitAnalytics',

  'GET /analyticByBotId/:id': 'AnalyticsController.getAnalyticsByBotId',
  'GET /chartData': 'AnalyticsController.conversationChart',
  
  


};

/**
 * AnalyticsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    'activeChats' :function(req, res) {
        return res.send('5');
    },
    'activeBots':function(req, res) {
        return res.send('2');
    },
    'totalConversations':function(req, res) {
        return res.send('20');
    },
    'conversationChart':function(req, res) {
        return res.send();
    }

};


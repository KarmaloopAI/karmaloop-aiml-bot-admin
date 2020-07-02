/**
 * AnalyticsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    'activeChats' : async function (req, res) {
        const currTimestamp = new Date().getMinutes() - 10;
        var updatedAtRecords = await Analytics.find({
            select: ['updatedAt']
        });
        if (updatedAtRecords) {
            const response = [];
            updatedAtRecords.forEach(element => {
                const storedTimestamp = new Date(element.updatedAt).getMinutes();
                if ((Math.abs(currTimestamp - storedTimestamp)) > 5) {
                    response.push(element);
                }
            });
            return res.send({count:response.length})
        } else {
            return res.send(JSON.stringify({ 'h': 2 }))
        }
    },
    'activeBots':function(req, res) {
        return res.send(JSON.stringify({count: 2}));
    },
    'totalConversations':function(req, res) {
        return res.send(JSON.stringify({count: 20}));
    },
    'conversationChart':function(req, res) {
        return res.send();
    }

};


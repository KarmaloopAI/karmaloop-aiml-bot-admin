/**
 * BotController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    'check': async function (req, res) {
        const currTimestamp = new Date().getMinutes();
        var updatedAtRecords = await Bot.find({
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
    }

};


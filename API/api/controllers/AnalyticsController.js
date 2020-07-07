/**
 * AnalyticsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  'activeChats': async function (req, res) {
    const currTimestamp = new Date();
    const previousFiveMin = new Date(currTimestamp);
    previousFiveMin.setMinutes(currTimestamp.getMinutes() - 5);
    var updatedAtRecords = await Analytics.find({
      timestamp: { '>': currTimestamp }, timestamp: { '<': previousFiveMin }, 
    });
    return res.send({count: updatedAtRecords.length})
  },
  'activeBots': function (req, res) {
    return res.send(JSON.stringify({ count: 2 }));
  },
  'totalConversations': function (req, res) {
    return res.send(JSON.stringify({ count: 20 }));
  },
  'conversationChart': function (req, res) {
    return res.send();
  },

  'submitAnalytics': async function(req, res ){
    try{
      const response = await Analytics.create(req.body).fetch()
      return res.status(201).send(response);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  'totalconversation': function (req, res) {
    return res.send(JSON.stringify([{
      date: '2 jan,Thursday',
      BOTA: 30,
      BOTB: 40,
      BOTC: 10,
      BOTD: 80,
      BOTE: 35
    }, {
      date: '6 jan,Monday ',
      BOTA: 20,
      BOTB: 45,
      BOTC: 72,
      BOTD: 93,
      BOTE: 11
    }, {
      date: '10 jan,Friday',
      BOTA: 40,
      BOTB: 28,
      BOTC: 61,
      BOTD: 100,
      BOTE: 32
    }, {
      date: '14 jan,Tuesday',
      BOTA: 22,
      BOTB: 41,
      BOTC: 64,
      BOTD: 20,
      BOTE: 64
    }, {
      date: '18 jan,Saturday',
      BOTA: 19,
      BOTB: 93,
      BOTC: 28,
      BOTD: 48,
      BOTE: 38
    }, {
      date: '22 jan, Wednesday',
      BOTA: 61,
      BOTB: 36,
      BOTC: 73,
      BOTD: 57,
      BOTE: 78
    },
    {

      botsdesc: [
        {
          value: 'BOTA',
          name: 'Bot A',

        }, {
          value: 'BOTB',
          name: 'Bot B',
        }, {
          value: 'BOTC',
          name: 'Bot C',
        },
        {
          value: 'BOTD',
          name: 'Bot D',
        },
        {
          value: 'BOTE',
          name: 'Bot E',
        },
      ]

    }


    ]));
  },




};


/**
 * AnalyticsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  'activeChats': async function (req, res) {
    const currTimestamp = new Date().getMinutes() - 10;
    var updatedAtRecords = await Analytics.find({
      select: ['timestamp']
    });
    const response = [];
    if (updatedAtRecords) {
      updatedAtRecords.forEach(element => {
        const storedTimestamp = new Date(element.updatedAt).getMinutes();
        if ((Math.abs(currTimestamp - storedTimestamp)) > 5) {
          response.push(element);
        }
      });
    }
    return res.send({ count: response.length })
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

  'botsdescription': function (req, res) {
    return res.send(JSON.stringify([{
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
    }

    ]));
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
    }

    ]));
  },




};


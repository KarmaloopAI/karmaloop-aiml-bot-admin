/**
 * MetricsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    'chart': function(req, res) {
        return res.send(JSON.stringify([{

          botName: 'BOT A',
          Status: '13 Aug, 2018, Active',
          Port: 8888,
          Location: 'New York',
          View: 'Options',
          Edit: 'Details',
          IPAddress: '64.57.667.81',
      
      }, {
          botName: 'BOT B',
          Status: '13 Aug, 2018, InActive',
          Port: 8888,
          Location: 'Ontario',
          View: 'Options',
          Edit: 'Details',
          IPAddress: '64.57.667.82',
      }, {
          botName: 'BOT C',
          Status: '13 Aug, 2018,Unreachable',
          Port: 8889,
          Location: 'Milan',
          View: 'Options',
          Edit: 'Details',
          IPAddress: '64.57.667.83',
      }, {
          botName: 'BOT D',
          Status: '13 Aug, 2018, Active',
          Port: 8889,
          Location: 'Las Vegas',
          View: 'Options',
          Edit: 'Details',
          IPAddress: '64.57.667.84',
      }, {
          botName: 'BOT E',
          Status: '13 Aug, 2018, Inactive',
          Port: 8889,
          Location: 'San Francisco',
          View: 'Options',
          Edit: 'Details',
          IPAddress: '64.57.667.85',
      }]));
      },
};


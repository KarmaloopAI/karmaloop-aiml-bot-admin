/**
 * BotController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  'getAllBots': async function (req, res) {
    var response = await Bot.find({
      select: ['botId', 'IPAddress', 'port', 'description', 'botName', 'groupName', 'status', 'location']
    });
    return res.send(response);
  },
  'getBotById': async function (req, res) {
    var id = req.params.id;
    var response = await Bot.findOne({
      id: id
    });
    if (response) {
      return res.status(202).send(response);
    } else {
      return res.status(404).send();
    }
  },
  'submitBotDetails': async function (req, res) {
    try {
      var response = await Bot.create(req.body).fetch()
      return res.status(201).send(response);
    } catch (error) {
      if (error.name == 'AdapterError') {
        if (error.code == 'E_UNIQUE') {
          return res.status(400).send({ 'errMsg': 'Duplicate Bot Id' });
        }
      }



    }
  },
  'deletBot': async function (req, res) {
    var id = req.params.id;
    var response = await Bot.destroyOne({
      id: id
    });
    if (response) {
      return res.status(202).send(response);
    } else {
      return res.status(404).send();
    }
  },
  'updateBot': async function (req, res) {
    var id = req.params.id;
    var response = await Bot.update({ botId: id }).set(req.body).fetch();
    if (response) {
      return res.status(202).send(response);
    } else {
      return res.status(404).send();
    }
  }

};


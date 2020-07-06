/**
 * BotController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    'getAllBots': async function (req, res) {
        const response = await Bot.find({
            select: ['botId', 'IPAddress', 'port', 'description', 'botName', 'groupName', 'status', 'location']
        });
        return res.send(response);
    },
    'getBotById': async function (req, res) {
        const id = req.params.id;
        const response = await Bot.findOne({
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
            const response = await Bot.create(req.body).fetch()
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
        const id = req.params.id;
        const response = await Bot.destroyOne({
            id: id
        });
        if (response) {
            return res.status(202).send(response);
        } else {
            return res.status(404).send();
        }
    },
    /**
     * @description Method to set the new details for the BOT
     * @param {*} req  Request to the API
     * @param {*} res  Response from the API
     */
    'updateBot': async function (req, res) {
        const id = req.params.id;
        try {
            const response = await Bot.update({ botId: id }).set(req.body).fetch();
            if (response) {
                return res.status(202).send(response);
            } else {
                return res.status(404).send();
            }
        } catch (err) {
            if (err.code === 'E_INVALID_VALUES_TO_SET') {
                return res.status(400).send({ 'errMsg': 'Invalid Status  - Status should be eithier Active or Inactive' })
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


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
    return res.send({ count: updatedAtRecords.length })
  },
  'activeBots': async function (req, res) {
    try {
      const response = await Bot.find({ status: 'Active' });
      return res.send({ count: response.length });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  'totalConversations': async function (req, res) {
    try {
      const count = await Analytics.count();
      return res.send({ count });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  'conversationChart': async function (req, res) {
    const startDate = new Date();
    startDate.setDate(new Date().getDate() + 30)
    const endDate = new Date();
    const botDetails = await Bot.find({
      select: ['botName', 'botId']
    });
    const chartDetails = await Chart.find({
      timestamp: { '>': endDate },
      timestamp: { '<': startDate }
    });
    const botDesc = [];
    const chartDesc = [];
    const totalBots = botDetails.length;
    // 1. Section to create the chart GET response
    botDetails.forEach((bot) => {
      botDesc.push({
        name: bot.botName,
        value: bot.botId
      })
      chartDetails.forEach((chart) => {
        if (chart.botId == bot.botId) {
          const index = chartDesc.findIndex(chartD => new Date(chartD.date).toLocaleDateString() === new Date(chart.timestamp).toLocaleDateString())
          if (index !== -1) {
            chartDesc[index] = { ...chartDesc[index], ...{ [bot.botId]: chart.count } }
          } else {
            chartDesc.push({
              date: new Date(chart.timestamp).toDateString(),
              [bot.botId]: chart.count
            })
          }
        }
      })
    });
    // 2. Section to check if all the bots are entered for each timestamp if not enters the botId with count 0
    chartDesc.map((chart, chartIndex) => {
      const keys = Object.keys(chart);
      if (totalBots !== keys.length - 1) {
        botDesc.forEach(bot => {
          if (!keys.includes(bot.value)) {
            chartDesc[chartIndex] = { ...chartDesc[chartIndex], ...{ [bot.value]: 0 } }
          }
        })
      }
    })
    return res.send({ botDesc, chartDesc });
  },

  'submitAnalytics': async function (req, res) {
    try {
      const botDetails = await Bot.find({ botId: req.body.botId });
      if (botDetails.length) {
        const analyticsData = { ...req.body, ...{ botName: botDetails[0].botName } }
        const response = await Analytics.create(analyticsData).fetch();
        // 1. Fetch the bot with the bot id to Get the previous chart data
        const storedChartDatas = await Chart.find({ botId: req.body.botId });
        // 2. If the previous data is present check further
        if (storedChartDatas.length) {
          // Variable defining a new entry for the bot to be created or not.
          let createNewEntry = false;
          // Variable for the chart entry to update the count if the time stamp matches
          let id = -1;
          // chart data stored temp for updating the count
          let tempChartData = {};
          storedChartDatas.map(storedChartData => {
            const chartTimestamp = new Date(storedChartData.timestamp).toLocaleDateString();
            const analyticsTimestamp = new Date(analyticsData.timestamp).toLocaleDateString();
            // If the timestamp is same increment the count fotr teh bot id
            if (chartTimestamp === analyticsTimestamp) {
              storedChartData.count += 1;
              id = storedChartData.id;
              tempChartData = { timestamp: analyticsData.timestamp, botId: req.body.botId, count: storedChartData.count };
              createNewEntry = false;
            } else {
              createNewEntry = true;
            }
          })
          if (createNewEntry) {
            const chartData = { timestamp: analyticsData.timestamp, botId: req.body.botId, count: 1 };
            await Chart.create(chartData).fetch();
          } else {
            await Chart.update({ id: id }).set(tempChartData).fetch();
          }
        } else { // 3. New bot data to be entered in the chart data
          const chartData = { timestamp: analyticsData.timestamp, botId: req.body.botId, count: 1 };
          await Chart.create(chartData).fetch();
        }
        return res.status(201).send(response);
      } else {
        return res.status(404).send({ errMsg: "Bot Not Found" });
      }

    } catch (err) {
      return res.status(400).send(err);
    }
  },
  'getAnalyticsByBotId': async function (req, res) {
    let botId = req.params.id;
    try {
      const analyticsData = await Analytics.find({ where: { botId: botId }, select: ['userReply', 'botReply', 'userId', 'timestamp'] });
      if (analyticsData.length) {
        return res.status(200).send(analyticsData);
      } else {
        return res.status(404).send({ errMsg: "Bot not found" });
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  }
};


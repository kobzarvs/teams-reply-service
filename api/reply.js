const { TeamsActivityHandler, CardFactory } = require("botbuilder");


module.exports = (req, res) => {
  const response = {
    composeExtension: {
      type: "result",
      attachmentLayout: "list",
      attachments: [CardFactory.heroCard(obj.name, obj.description)],
    },
  }
  console.log('body', req.body);
    res.json({
      body: JSON.stringify(response),
      query: req.query,
      cookies: req.cookies,
    });
  }
  
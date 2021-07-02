module.exports = (req, res) => {
  const {CardFactory} = require("botbuilder");

  const response = {
    composeExtension: {
      type: "result",
      attachmentLayout: "list",
      attachments: [CardFactory.heroCard('name', 'description')],
    },
  }
  console.log('body', req.body);
    res.json({
      body: JSON.stringify(response),
      query: req.query,
      cookies: req.cookies,
    });
  }
  
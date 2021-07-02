module.exports = (req, res) => {
    res.json({
      body: req.body ? JSON.parse(req.body) : undefined,
      query: req.query,
      cookies: req.cookies,
    })
  }
  
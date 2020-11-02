class HomeController {
  async create(req, res) {
    return res.render('home', { username: req.session.user.name });
  }
}

module.exports = new HomeController();

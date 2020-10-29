const User = require('../models/User');

class SessionController {
  async create(req, res) {
    return res.render('login');
  }

  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      console.log('Usuário não encontrado');
      return res.redirect('/');
    }

    if (!(await user.checkPassword(password))) {
      console.log('Senha incorreta');
      return res.redirect('/');
    }

    req.session.user = user;

    return res.redirect('/welcome');
  }

  destroy(req, res) {
    req.session.destroy(() => {
      res.clearCookie('client');
      return res.redirect('/');
    });
  }
}

module.exports = new SessionController();

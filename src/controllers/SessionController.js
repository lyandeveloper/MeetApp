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

    console.log(user);

    return res.redirect('/room');
  }
}

module.exports = new SessionController();

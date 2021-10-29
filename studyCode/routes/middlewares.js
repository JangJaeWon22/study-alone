const Logged = {
  isLoggedIn: (req, res, next) => {
    if (req.isAuthenicated()) {
      next();
    } else {
      res.status(403).send("로그인 필요");
    }
  },
  isNotLoggedIn: (req, res, next) => {
    if (!req.isAuthenicated()) {
      next();
    } else {
      const message = encodeURLComponent("로그인한 상태입니다.");
      res.redirect(`/?err=${message}`);
    }
  },
};

module.exports = { Logged };

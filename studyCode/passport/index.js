const passport = require("passport");
const local = require("./localStrategy");
const kakao = require("./kakaoStrategy");
const { User } = require("../models");

module.exprts = () => {
  passport.serializeUser((user, done) => {
    //null -> err 발생시 사용
    done(null, user.id);
  });

  // user.id -> id로 넘어옴
  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id } })
      //req.user에 저장
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });

  local();
  kakao();
};

const User = require('../models/user');


exports.home = function (req, res) {
  User.find({}, function(err, users){
      res.render('index',{title: "CRUD - Read", users: users, message: req.flash('info') });
  })

};
exports.user_create = function (req, res) {
    res.render('create',{title: "CRUD - Create", message: req.flash('info') });
};
exports.user_create_post = function (req, res) {
    let user = new User(
        {
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('info', 'User Created');
        res.redirect('/')
    })
};

exports.user_details = function (req, res, next) {
  User.findById(req.params.id, function (err, user) {
      if (err) return next(err);
      res.render("edit", {title: "CRUD - Update",user: user, message: req.flash('info')});
  })
};

exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        req.flash('info', 'User edited!')
        res.redirect("/");
    });
};

exports.user_delete = function (req, res, next) {

    User.findOneAndDelete(req.params.id, function (err) {
        if (err) return next(err);
        req.flash('info', 'User deleted!')
        res.redirect("/");
    })
};

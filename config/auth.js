exports.isAdmin = function (req, res, next) {
  console.log('req admin =====>', req.locals);
  if (req.isAuthenticated() && res.locals.user.isAdmin == true) {
    next();
  } else {
    req.flash('danger', 'Please Log in as admin');
    res.status(200).json('Admin');
  }
};

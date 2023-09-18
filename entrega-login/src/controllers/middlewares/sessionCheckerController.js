const sessionChecker = (req, res, next) => {
    if (req.session && req.session.authenticated) {
        // La sesión está activa, permite que el usuario continúe
        next();
    } else {
        // La sesión no está activa, redirige al usuario al inicio de sesión
        res.redirect('/login');
    }
};

module.exports = {
    sessionChecker
}
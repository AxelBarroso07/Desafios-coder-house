const loginController = (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123') {
        console.log('asdas')
        req.session.authenticated = true;
        res.redirect('/realtimeProducts')
        res.status(200) 
    } else {
        res.status(401).send('Credenciales incorrectas');
    }
}

module.exports = {
    loginController
}
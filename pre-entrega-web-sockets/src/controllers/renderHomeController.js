const renderHomeController = (req, res) => {
    const data = {
        title: 'Ecommerce',
        message: 'Welcome to the Handlebars example!'
    };

    res.render('home', data);
}

module.exports = {
    renderHomeController
}
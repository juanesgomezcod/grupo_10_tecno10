const controller = {
    store: (req, res) => {
        res.render("store");
    }, 

    productDetail: (req, res) => {
        res.render("productDetail");
    }, 

    productCart: (req, res) => {
        res.render("productCart");
    }, 

    newProduct : (req, res) => {
        res.render("newProduct");
    }
    }

module.exports = controller;
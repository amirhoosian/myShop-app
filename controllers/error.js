const geterror404 = (req, res) => {
    res.status(404).render('404', {pageTitle: 'page not found', path: ''})
}

exports.geterror404 = geterror404
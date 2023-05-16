function notAllowed (req, res) {
    res.status(405).send({
        message: 'Method Not Allowed',
        code: 405,
        error: "ERROR_METHOD_NOT_ALLOWED"
    })
}


function notFound (req, res) {
    res.status(404).send({
        message: 'Resources Not Found',
        code: 404,
        error: "ERROR_NOT_FOUND"
    })
}

module.exports = {
    notAllowed,
    notFound
}
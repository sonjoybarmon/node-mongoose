module.exports.first = function(req, res, next) {
    console.log('1st middlewares');
    next()
}

module.exports.second = function(req, res, next) {
    console.log('2nd middlewares');
    next()
}

module.exports.third = function(req , res, next) {
    console.log('3rd middlewares');
    return res.send('Done');
}
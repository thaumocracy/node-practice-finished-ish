module.exports.add = (a,b) => {
    return a + b ;
}
module.exports.mult = (a,b) => {
    return a * b ;
}
module.exports.square = (x) => {
    return x * x ;
}
module.exports.asyncSquare = (x,callback) => {
    setTimeout(() => {
        callback(x*x);
    }, 1000)
}

module.exports.set = (user,fullName) => {
    const names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}
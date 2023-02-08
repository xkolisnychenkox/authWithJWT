const User = require('../model/user');

exports.loginGet = (req, res) => {
    res.render('login');
};

exports.loginPost = async (req, res) => {
    const {email, password} = req.body;

    // try{
    //     const user = await User.create
    // }
    // catch (err){
    //
    // }

    console.log(email, password);

    res.send('user login');
};
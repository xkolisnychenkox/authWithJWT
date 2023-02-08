const User = require('../model/user');

//handle errors

const handleErrors = (err) => {
  console.log(err.message, err.code);

  let errors = { email: '', password: '' };

  //duplicate error code
  if (err.code === 11000){
    errors.email = 'that email already registered';
    return errors;
  }

  //validation errors
  if (err.message.includes('user validation failed')){
    Object.values(err.errors).forEach(({properties}) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;

};

exports.signGet = (req, res) => {
  res.render('signup');
};

exports.signPost = async (req, res) => {
  const {email, password} = req.body;

  try{
    const user = await User.create({email, password});
    res.status(201).json(user);
  }
  catch (err){
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
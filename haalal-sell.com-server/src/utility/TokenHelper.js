const jwt = require('jsonwebtoken');
exports.EncodeToken=(email,user_id)=> {
  return  jwt.sign({email:email,id:user_id},process.env.JWT_SECRATE,{expiresIn:'7d'});
}

exports.DecodeToken=(token)=> {
  try {
    return  jwt.verify(token, process.env.JWT_SECRATE);
  }
  catch(err) {
    return null;
  }
}


const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try{
        const token = req.header("x-auth-token");
        if(!token){
            return res.status(400).json({msg: "No Auth token, access denied"});
            
        }
        const verified = jwt.verify(token, "passwordKey");
        if(!verified){
           return  res.status(400).json({msg: "Token verification faild, authroization denied"});

        }
        req.user = verified.id;
        req.token = token;
        next();
    } catch(e){
        res.status(500).json({err: e.message});
    }
};

module.exports = auth;
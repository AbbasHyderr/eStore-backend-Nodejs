const jwt = require('jsonwebtoken');
const User = require('../models/user');

const checkAdmin = async (req, res, next) => {
    try{
        const token = req.header('x-auth-token');
        if(!token){
            return res.status(401).json({msg: "No auth token, access denied"});
        }
        const verified = jwt.verify(token, 'psswordKey');
        if(!verified){
            return res.status(401).json({msg: "Authorization failded, access denied"});

        }
        const user = await User.findOne(verified.id);
        if(user.type == 'user' || user.type == 'seller'){
            return res.status(401).json({msg: "You are not Admin"});
        }
        req.user = verified.id;
        req.token = token;

    } catch(e){
        res.status(500).json({err: e.message});
    };

    

};
module.exports = checkAdmin;
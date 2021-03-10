const router = require('express').Router();
const User = require('../Models/User');
const {registerValidation} = require('./validation');


router.post('/register', async (req,res)=>{
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error);
    const emailExists = await User.findOne({email: req.body.email});
    if (emailExists) return res.status(400).send('email already exists');
    
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,

    });
    try {savedUser = await user.save();
        res.send(savedUser);
        
    } catch (err) {res.status(400).send(err)
        
    }
})


module.exports = router;


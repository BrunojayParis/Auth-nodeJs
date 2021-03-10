const router = require('express').Router();
const User = require('../Models/User');
const {registerValidation, loginValidation} = require('./validation');


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
        
    };
});

router.post('/login', async (req,res)=>{
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error);
    const emailExists = await User.findOne({email: req.body.email});
    if (!emailExists) return res.status(400).send('email does not exist, please register.');

});



module.exports = router;


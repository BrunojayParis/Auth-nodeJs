const router = require('express').Router();
const User = require('../Models/User');
const {registerValidation, loginValidation} = require('./validation');
const bcrypt = require('bcryptjs');


router.post('/register', async (req,res)=>{
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error);


    //Check if the email exists
    const emailExists = await User.findOne({email: req.body.email});
    if (emailExists) return res.status(400).send('email already exists');
    
    //Hash password with brcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create a new user
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPassword,

    });
    try {savedUser = await user.save();
        res.send(savedUser);
        
    } catch (err) {res.status(400).send(err)
        
    };
});

router.post('/login', async (req,res)=>{
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error);

    //Check if user exists
    const emailExists = await User.findOne({email: req.body.email});
    if (!emailExists) return res.status(400).send('email does not exist, please register.');
    //Check if the password is OK.
    const validPassword = await bcrypt.compare(req.body.password, emailExists.password);
    if (!validPassword) return res.status(400).send('Pasword incorrect');

    res.send("logged in");



});



module.exports = router;


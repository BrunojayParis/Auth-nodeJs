const router = require('express').Router();
const User = require('../Models/User');

router.post('/register', async (req,res)=>{
    const user = new User({
        userName: req.body.userName ,
        email: req.body.email,
        password: req.body.password ,

    });
    try {savedUser = await user.save();
        res.send(savedUser);
        
    } catch (err) {res.status(400).send(err)
        
    }
})


module.exports = router;


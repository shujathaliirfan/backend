const express = require('express');
const  Password = require('../models/password')

const router = express.Router()



router.get('/list',async(req,res) => {
    const data = await Password.find({}).sort({createdAt: -1})
    res.status(200).json(data)
})

router.post('/createpassword',async(req,res) => {
   

    if(req.body){
             try {
        const resp = await Password.create(req.body);
        res.status(200).json(resp)

        
    } catch (error) {
    next(error)
    }
    }

   

    
})


module.exports = router
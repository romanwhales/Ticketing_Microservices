import express from 'express';
import jwt from 'jsonwebtoken';
import {currentUser} from  '@romanwhalestickets/common';
// import {currentUser} from '../../../common/src/middlewares/current-user'






const router = express.Router();


router.get('/api/users/currentuser',currentUser,(req,res)=>{
    // console.log('Req.session is ',req.session);
    // if(!req.session || !req.session.jwt){
    //     return res.send({
    //         currentUser:null
    //     })
    // }
    // try{
    // const payload = jwt.verify(req.session.jwt,process.env.JWT_KEY!);
    // res.send({
    //     currentUser: payload
    // })
    // }catch(err){
    //     res.send({
    //         currentUser: null
    //     })
    // }
    console.log('Current User is ',req.currentUser);
    res.send({currentUser: req.currentUser || null})
})

export {router as currentUserRouter}
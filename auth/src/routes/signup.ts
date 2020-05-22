import express,{Request,Response} from 'express';
import {body} from 'express-validator';
// import {RequestValidationError} from '../errors/request-validation-error';
import {BadRequestError,validateRequest} from '@romanwhalestickets/common';
// import {BadRequestError} from '../../../common/src/errors/bad-request-error';
import jwt from 'jsonwebtoken';
// import {validateRequest} from '../../../common/src/middlewares/validate-request';


import {User} from '../models/User';



const router = express.Router();


router.post('/api/users/signup',[
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({min:4,max:20}).withMessage('Password must be between 4 and 20 characters')
],validateRequest,async (req: Request,res:Response)=>{
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     throw new RequestValidationError(errors.array());
    // }
    // const {email,password} = req.body;
    
    const {email,password} = req.body;

    const existingUser = await User.findOne({email});
    if(existingUser){
        // console.log('Email in Use');
        throw new BadRequestError("Email in Use")
        return res.send({});
    }
    const user = User.build({
        email,
        password
    })

    await user.save();

    // generate json web token

    
    // generate JWT
    
    const userJWT = jwt.sign({
        id: user.id,
        email: user.email
    },process.env.JWT_KEY!);
    // store it on session object
    req.session = {jwt:userJWT}
    res.status(201).send(user);
})

export {router as signupRouter}
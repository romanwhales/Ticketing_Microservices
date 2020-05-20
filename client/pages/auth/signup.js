import {useState} from "react";
import Router from "next/router";

import useRequest from '../../hooks/use-request';

export default () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {doRequest,errors} = useRequest({
        url:'/api/users/signup',
        method: 'post',
        body:{
            email,
            password
        },
        onSuccess: () => Router.push("/")
    })


    const onSubmit = async (event) => {
        event.preventDefault();
        // try{
        //     const response = await axios.post('/api/users/signup',{email,password})
        //     // console.log(response.data);
        // }catch(err){
        //     console.log(err.response.data);
        //     setErrors(err.response.data.errors);
        // }
       
        await doRequest();
        
        
    }

    return (<form onSubmit={onSubmit}>
        <h1>Sign Up 2</h1>
        <div className="form-group">
            <label>Email Address</label>
            <input className="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        {errors}
        
        <button className="btn btn-primary">Sign Up</button>
    </form>)
}
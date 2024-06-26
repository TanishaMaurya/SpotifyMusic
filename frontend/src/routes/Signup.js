import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import {Link, useNavigate} from 'react-router-dom';
import {makeUnauthenticatedPostRequest} from '../utils/serverHelpers';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
 
console.log(1);
const SignupComponent = () => {
       const [email,setEmail]=useState("");
       const [confirmEmail,setConfirmEmail]=useState("");
       const [username,setUsername]=useState("");
       const [password,setPassword]=useState("");
      const [firstName,setFirstName]=useState("");
       const [lastName,setLastName]=useState("");
       //  const history=useHistory();
        const navigate=useNavigate();
         
       const[cookie,setCookie]=useCookies(["token"]);
const signUp=async () => {
       if(email !== confirmEmail){
              alert("Email and confirm email is not same");
              return;
           
       }
       

       const data={email,password,username,firstName,lastName};
       const response= await makeUnauthenticatedPostRequest(
              "/auth/register",data
                
       );
       
console.log(2);
       if(response && !response.err){
              console.log(response)
              const token=response.token;
              const date=new Date();
              date.setDate(date.getDate()+30);
              setCookie("token",token,{path:"/",expires:date});
              alert("Success");
              navigate("/home")

       }else{
              alert("Failure");
       }
}

 return (
 <div  className='w-full h-full flex flex-col items-center'>
   <div className='logo p-5 border-b border-solid border-gray-200 w-full flex justify-center'>
    <Icon icon="logos:spotify" width="150" />
   </div>
   <div className='inputRegion w-1/3 py-10 flex items-center justify-center flex-col '>
      <div className='font-semibold mb-12 text-2xl'>Sign up for free to start listening.</div>
        <TextInput label="Email address" placeholder="Enter your email" className="my-8" value={email} setValue={setEmail}/>
        <TextInput label="Confirm Email Address" placeholder="Enter your email again" className="mb-6" value={confirmEmail} setValue={setConfirmEmail}/>
 <TextInput label="Username" placeholder="Enter your username" className="mb-6" value={username} setValue={setUsername}/>

        <PasswordInput label="Create Password" placeholder="Enter a strong password here" value={password} setValue={setPassword}/>
      
      <div className='w-full flex justify-between items-center space-x-4' >
        <TextInput label="First Name" placeholder="Enter your first name" className="my-6" value={firstName} setValue={setFirstName}/>
      <TextInput label="Last Name" placeholder="Enter your last name" className="my-6" value={lastName} setValue={setLastName}/>

       </div>
        <div className='w-full flex items-center justify-end my-8'>
 <button className='bg-green-300  font-semibold p-3 px-10 rounded-full'
  onClick={(e)=>{
       e.preventDefault();
       signUp();
 }}>Sign Up</button>
        </div>
        <div className='w-full border border-solid border-gray-300'></div>
 <div className='my-6 font-semibold text-lg'>Already have an account ?</div>
 <div className='border border-gray-400 w-full text-gray-500 font-bold flex items-center justify-center py-4 rounded-full '>
  <Link to="/login">LOG IN INSTEAD</Link>
  </div>
   </div>
  
  </div>
 );
}

export default SignupComponent;

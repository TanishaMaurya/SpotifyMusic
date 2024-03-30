import { Icon } from '@iconify/react';
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import {Link,useNavigate} from 'react-router-dom';
import {useState} from "react";
import { makeUnauthenticatedPostRequest } from '../utils/serverHelpers';
import { useCookies } from 'react-cookie';


const LoginComponent=()=>{
  const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cookies,setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

       const login=async () => {
       
       const data={email,password};
       const response= await makeUnauthenticatedPostRequest(
              "/auth/login",data
                
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

 return(
  <div  className='w-full h-full flex flex-col items-center'>
   <div className='logo p-5 border-b border-solid border-gray-200 w-full flex justify-center'>
    <Icon icon="logos:spotify" width="150" />
   </div>
   <div className='inputRegion w-1/3 py-10 flex items-center justify-center flex-col '>
      <div className='font-semibold mb-12'>To continue,log in to spotify</div>
        <TextInput label="Email address or username" placeholder="Email address or username" className="my-6"
        value={email} setValue={setEmail}/>
        <PasswordInput label="Password" placeholder="Password" value={password} setValue={setPassword}/>
        <div className='w-full flex items-center justify-end my-8'> 
 <button className='bg-green-300  font-semibold p-3 px-10 rounded-full '
 onClick={(e)=>{
       e.preventDefault();
       login();
 }}
 >LOG IN</button>
        </div>
        <div className='w-full border border-solid border-gray-300'></div>
 <div className='my-6 font-semibold text-lg'>Don't have a account ?</div>
 <div className='border border-gray-400 w-full text-gray-500 font-bold flex items-center justify-center py-4 rounded-full '>
  
  <Link to="/signup">SIGN UP FOR SPOTIFY</Link></div>
   </div>
  
  </div>
 )
}
export default LoginComponent;
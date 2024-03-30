import React, { useState } from 'react';
import IconText from "../components/shared/IconText";
import spotify_logo from '../assets/images/spotify_logo_white.svg';
import {Icon} from "@iconify/react";
import TextWithHover from '../components/shared/TextWithHover';
import TextInput from '../components/shared/TextInput';
import CloudinaryUpload from '../components/shared/CloudinaryUpload';
import {makeAuthenticatedPostRequest} from '../utils/serverHelpers';
import { useNavigate } from 'react-router-dom';
 
const UploadSong = () => {
 const [name,setName]=useState("");
 const [thumbnail,setThumbnail]=useState("")
 const [playlistUrl,setPlaylistUrl]=useState("");
const [uploadedSongFileName,setUploadedSongFileName]=useState();
const navigate=useNavigate();
const submitSong =async() =>{
 const data={name,thumbnail,track:playlistUrl};
 const response=await makeAuthenticatedPostRequest(
  "/song/create",data
 );
 if(response.err){
  alert("Could not create song");
  return;
 }
 alert("Success");
 navigate("/home");

 
};

 return (
  // left part 
  <div className='w-full h-full flex'>
   <div className='h-full w-1/5 bg-black flex flex-col justify-between pb-10'>
    <div>
       <div className='logoDiv p-6'>
      <img src={spotify_logo} alt="spotify_logo" width={125}/>
       </div>
       <div className='py-5'>
         <IconText iconName={"material-symbols:home"}  displayText={"Home"} active/>
         <IconText iconName={"material-symbols:search"}  displayText={"Search"}/>
        <IconText iconName={"icomoon-free:books"}  displayText={"Library"}/>
        <IconText iconName={"basil:music-solid"}  displayText={"My Music"}/>


       </div>
       <div className='pt-5'>

     <IconText iconName={"icon-park-solid:add"}  displayText={"Create Playlist"}/>
     <IconText iconName={"clarity:heart-solid" }  displayText={"Liked Songs"}/>
       </div>
</div>
<div className='px-5'>
       <div className='border border-gray-500 text-white w-3/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer' >
    <Icon icon="carbon:earth"/>
        <div className='ml-2 text-sm font-semibold'>English</div>
       </div>
       </div>
   </div>
  

{/* ///right part */}
   <div className='h-full w-4/5 bg-app-black overflow-auto p-5'>
<div className='navbar flex w-full h-1/10 bg-black bg-opacity-30 items-center justify-end'>
<div className='w-1/2 flex h-full'>
  <div className='w-3/5 flex justify-around'>
<TextWithHover displayText={"Premium"}/>
<TextWithHover displayText={"Support"}/>
<TextWithHover displayText={"Download"}/>
</div>
<div className='w-2/5 flex justify-around h-full items-center'>
<TextWithHover displayText={"Sign up"}/>
<div className='bg-white h-1/2 px-4 flex items-center justify-center rounded-full cursor-pointer'>
  LOG IN
</div>
</div>
</div>

</div>
<div className='content p-6 overflow-auto  '>
<div className='text-2xl font-semibold mb-5 text-white mt-8'>Upload Your Music</div>
<div className='w-2/3 flex space-x-3'>
 <div className='w-1/2'>
<TextInput label="Name" labelClassName={"text-white"} placeholder="Name" value={name} setValue={setName}/>
 </div>
 <div className='w-1/2'>
 <TextInput label="Thumbnail" labelClassName={"text-white"} placeholder="Thumbnail" value={thumbnail} setValue={setThumbnail}/>
 </div>
 </div>
 <div className='py-5'>
  {
  uploadedSongFileName ? (
    <div className='bg-white rounded-full p-3 w-1/3'>{uploadedSongFileName.substring(0,30)}...
      </div>
  ):
  (
  <CloudinaryUpload setUrl={setPlaylistUrl} setName={setUploadedSongFileName}/>

  )
  }

</div>
<div className='bg-white w-40 flex items-center justify-center p-4 cursor-pointer rounded-full font-semibold' onClick={submitSong}>
Submit Song
</div>
</div>
   </div>
  </div>
 );
}


export default UploadSong;

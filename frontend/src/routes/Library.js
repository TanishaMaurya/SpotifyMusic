import React, { useEffect, useState } from 'react';
import LoggedInContainer from '../containers/LoggedInContainer';
import { makeAuthenticatedGETRequest } from '../utils/serverHelpers';
import {useNavigate} from "react-router-dom";




const Library = () => {
 const [myPlaylists,setMyPlaylists]=useState([]);

 
 useEffect(()=>{
  const getData=async ()=>{
   const response=await makeAuthenticatedGETRequest(
    "/playlist/get/me"
   );
   setMyPlaylists(response.data);
  };
  getData();
 },[])

 return (
  <LoggedInContainer curActiveScreen={"library"}>
   <div className='text-white text-xl pt-8 font-semibold'>
 My Playlist
   </div>
   <div className='py-5 grid gap-5 grid-cols-5'>
         {myPlaylists.map((item)=>{
          return(
           <Card
           key={JSON.stringify(item)}
           title={item.name}
           description=""
           imgUrl={item.thumbnail}
           playlistId={item._id}
           />
          )
         })}
   </div>
  </LoggedInContainer>
 );
}

const Card=({title,description,imgUrl,playlistId})=>{
  const navigate = useNavigate();
  return(
    <div className='bg-black bg-opacity-60 w-full  p-4  rounded-lg cursor-pointer' onClick={()=>{navigate("/playlist/"+playlistId)}}>
      <div className='pt-4  '>
        <img className='w-full rounded-md pb-5 '
        src={imgUrl}
        alt="label"/>
      </div>
      <div className='text-white text-sm font-semibold pb-2 '>{title}</div>
      <div className='text-gray-500 text-sm'>{description}</div>
    </div>
  )
}

export default Library;

import React, { useState } from 'react';
import TextInput from '../components/shared/TextInput';
import { makeAuthenticatedPostRequest } from '../utils/serverHelpers';

const CreatePlaylistModal = ({closeModal}) => {
 const [playlistName,setPlaylistName]=useState("");
 const [playlistThumbnail,setPlaylistThumbnail]=useState("");

const createPlaylist=async()=>{
 const response=await makeAuthenticatedPostRequest(
  "/playlist/create",
  {name:playlistName,thumbnail:playlistThumbnail,songs:[]}
 );
 if(response._id){
  closeModal();
 }
}

 return (
  <div className='absolute w-screen h-screen  bg-blue-200  bg-opacity-50 flex justify-center items-center'
  onClick={closeModal}>
   <div className='w-2/5 h-2/4  bg-gray-900 rounded-md px-8 py-4' onClick={(e)=>{e.stopPropagation(); }}>
    <div className='text-white mb-12 font-semibold text-lg p-3 '>Create Playlist</div>
    <div className='space-y-4 flex flex-col justify-center items-center '>
     <TextInput
      label="Name"
      labelClassName={"text-white"}
      placeholder="Playlist Name"
      value={playlistName}
      setValue={setPlaylistName}
     />
     <TextInput
      label="Thumbnail"
      labelClassName={"text-white"}
      placeholder="Thumbnail"
      value={playlistThumbnail}
      setValue={setPlaylistThumbnail}
     />
     <div className='bg-white w-1/4 rounded  font-semibold flex justify-center items-center py-3   cursor-pointer '
     onClick={createPlaylist}
     >Create</div>

    </div>
   </div>


  </div>
 );
}

export default CreatePlaylistModal;

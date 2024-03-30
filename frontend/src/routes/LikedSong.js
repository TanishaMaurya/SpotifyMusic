import React, { useEffect, useState } from 'react';
import LoggedInContainer from '../containers/LoggedInContainer';
import { makeAuthenticatedGETRequest } from '../utils/serverHelpers';
import {useNavigate} from "react-router-dom";
import SingleSongCard from "../components/shared/SingleSongCard";





const LikedSong= () => {
 const [myPlaylists,setMyPlaylists]=useState([]);
// const [likeSongs,setLikeSongs]
     const [songData, setSongData] = useState([]);

 return (
  <LoggedInContainer curActiveScreen={"likedSongs"}>
<div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">
                 Liked Songs
            </div>
            <div className="space-y-3 overflow-auto">
                {songData.map((item) => {
                    return <SingleSongCard info={item} playSound={() => {}} />;
                })}
            </div>
  </LoggedInContainer>
 );
}

// const Card=({title,description,imgUrl,playlistId})=>{
//   const navigate = useNavigate();
//   return(
//     <div className='bg-black bg-opacity-60 w-full  p-4  rounded-lg cursor-pointer' onClick={()=>{navigate("/playlist/"+playlistId)}}>
//       <div className='pt-4  '>
//         <img className='w-full rounded-md pb-5 '
//         src={imgUrl}
//         alt="label"/>
//       </div>
//       <div className='text-white text-sm font-semibold pb-2 '>{title}</div>
//       <div className='text-gray-500 text-sm'>{description}</div>
//     </div>
//   )
// }

export default LikedSong;

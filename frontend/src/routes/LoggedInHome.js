import React from 'react';
import IconText from "../components/shared/IconText";
import spotify_logo from '../assets/images/spotify_logo_white.svg';
import {Icon} from "@iconify/react";
import TextWithHover from '../components/shared/TextWithHover';
import {Howl,Howler} from "howler";
import { useState } from 'react';
import LoggedInContainer from '../containers/LoggedInContainer';

const focusCardsDate =[{
  title:"Peaceful piano",
description:"Relax and indulge with beautiful piano piece",
   imgUrl:"https://images.unsplash.com/photo-1479118013749-9f79d55a28d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFpbm98ZW58MHx8MHx8fDA%3D"
},
{
  title:"Deep Focus",
description:"Relax and indulge with beautiful piano piece",
 imgUrl:"https://plus.unsplash.com/premium_photo-1670252341725-757fc439bf62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljfGVufDB8fDB8fHww"
},
{
title:"Instrumental Study",
description:"Relax and indulge with beautiful piano piece",
imgUrl:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D"
},
{
title:"Focus flow",
description:"Relax and indulge with beautiful piano piece",
 imgUrl:"https://plus.unsplash.com/premium_photo-1664302427357-40eb7c8fd3c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8fDA%3D"
},
{
  title:"All out",
  description:"Relax and indulge with beautiful piano piece",
  imgUrl:"https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljfGVufDB8fDB8fHww"
},
 ]

 const spotifyPlaylistsCardData=[{
  title:"Lovely love",
description:"Relax and indulge with beautiful piano piece",
   imgUrl:"https://images.unsplash.com/photo-1601643157091-ce5c665179ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxNzI0NTc4fHxlbnwwfHx8fHw%3D"
},
{
  title:"Namo Nam",
description:"Relax and indulge with beautiful piano piece",
 imgUrl:"https://images.unsplash.com/photo-1602025217354-1dc464655b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxNzI0NTc4fHxlbnwwfHx8fHw%3D"
},
{
title:"Eye pain",
description:"Relax and indulge with beautiful piano piece",
imgUrl:"https://images.unsplash.com/photo-1593958812614-2db6a598c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwxNzI0NTc4fHxlbnwwfHx8fHw%3D"
},
{
title:"Flow blood",
description:"Relax and indulge with beautiful piano piece",
 imgUrl:"https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljfGVufDB8fDB8fHww"
},
{
  title:"All out",
  description:"Relax and indulge with beautiful piano piece",
  imgUrl:"https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljfGVufDB8fDB8fHww"
},
 ]
const soundCard =[{
  title:"Sound love",
description:"Relax and indulge with beautiful piano piece",
   imgUrl:"https://images.unsplash.com/photo-1588458824535-b940dbbb505a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8MTcyNDU3OHx8ZW58MHx8fHx8"
},
{
  title:"Painful",
description:"Relax and indulge with beautiful piano piece",
 imgUrl:"https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljfGVufDB8fDB8fHww"
},
{
title:"Heart break",
description:"Relax and indulge with beautiful piano piece",
imgUrl:"https://images.unsplash.com/photo-1485579149621-3123dd979885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fHww"
},
{
title:"Cry baby",
description:"Relax and indulge with beautiful piano piece",
 imgUrl:"https://images.unsplash.com/photo-1479118013749-9f79d55a28d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFpbm98ZW58MHx8MHx8fDA%3D"
},
{
  title:"All in me",
  description:"Relax and indulge with beautiful piano piece",
  imgUrl:"https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fHww"
},
 ]


const LoggedInHome=() =>{
  return(
    <LoggedInContainer curActiveScreen="home">
     <PlaylistView titleText="Focus" cardsData={focusCardsDate} />
 <PlaylistView titleText="Spotify Playlist" cardsData={spotifyPlaylistsCardData} />
 <PlaylistView titleText="Sound of India"  cardsData={soundCard} />

    </LoggedInContainer>
  )
}


const PlaylistView =({titleText,cardsData})=>{
return(
  <div className='text-white mx-6 mt-8 '>
    <div className='text-2xl font-semibold mb-4'>{titleText}</div>
    <div className='w-full  flex justify-between  space-x-4'>
      {
        cardsData.map((item)=>{
          return(
            <Card
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
            />
          )
        })
      }
     
    </div>
  </div>
)
};

const Card=({title,description,imgUrl})=>{
  return(
    <div className='bg-black bg-opacity-60 w-2/6 p-4  rounded-lg'>
      <div className='pt-4 '>
        <img className='w-full rounded-md pb-5 '
        src={imgUrl}
        alt="label"/>
      </div>
      <div className='text-white text-sm font-semibold pb-2'>{title}</div>
      <div className='text-gray-500 text-sm'>{description}</div>
    </div>
  )
}
export default LoggedInHome;

import './output.css'
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from './routes/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import UploadSong from './routes/UploadSong'
import MyMusic from './routes/MyMusic';
import LoggedInHomeComponent from './routes/LoggedInHome';
 import SinglePlaylistView from "./routes/SinglePlaylistView";
import songContext from './contexts/songContext';
import { useState } from 'react';
import SearchPage from './routes/SearchPage'
import Library from './routes/Library';
import LikedSong from './routes/LikedSong';

function App() {
  const [currentSong,setCurrentSong]=useState(null);
  const [cookie,setCookie]=useCookies(["token"]);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused,setIsPaused]=useState(true);

  

  return (
    <div className="h-screen w-screen font-poppins">
      <BrowserRouter>
      {cookie.token ? ( 
       
        <songContext.Provider 
        value={{currentSong,setCurrentSong,
        soundPlayed,setSoundPlayed,isPaused,setIsPaused,}}>
      
        <Routes>
             <Route path="/home" element={<LoggedInHomeComponent/>} />
             <Route path="/uploadSong" element={<UploadSong/>}/>
           <Route path="/myMusic" element={<MyMusic/>}/>
           <Route path="likedSongs" element={<LikedSong/>}/>
           <Route path="/search" element={<SearchPage/>}/>
           <Route path="/library" element={<Library/>} />
           <Route path="/playlist/:playlistId" element={<SinglePlaylistView/>} />
             <Route path="*" element={<Navigate to="/home"/>}/>
       </Routes>
       </songContext.Provider>
       ) : 
       (<Routes>
        {/* logged out route  */}
             <Route path="/login" element={<LoginComponent/>}/>
             <Route path="/signup" element={<SignupComponent/>}/>
            <Route path="*" element={<Navigate to="/login"/>}/>

       </Routes>
           )}
      </BrowserRouter>

    </div>
  );
}

export default App;

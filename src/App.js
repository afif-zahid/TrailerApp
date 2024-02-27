
import './App.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

function App() {
  const [vedio , setVedio] = useState("crakk");
  const [vedioURL , setVedioURL] = useState("https://youtu.be/1sCdl0u9VvI");
  function handleSearch(){
    movieTrailer(vedio).then((res) => {
      setVedioURL(res);
    });
  }
  return (
        <div className='App'>
            <div className='search-box'>
              <input type='text' placeholder='Enter movie name' className='input-bar' onChange={(e) => {setVedio(e.target.value)}} />
            <button className='button' onClick={() =>{ handleSearch()}} >
              search
            </button>
            </div>

            <ReactPlayer  url={vedioURL} 
         controls={true} />
        </div>
     );
}

export default App;

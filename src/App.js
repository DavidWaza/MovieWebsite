
import './App.css';
import './movie.js'
import React from 'react';
import picture from './img/f-t-1.png';
import picture2 from './img/Shang.png';
import waza from './img/waza.jpg';
import img1 from './img/her.jpeg';
import img2 from './img/kickass.jpeg';
import img3 from './img/pathsofglory.jpeg';
import img4 from './img/duedate.jpeg';
import img5 from './img/1920.jpeg';
import img6 from './img/fairytale.jpeg';
import img7 from './img/aquaman.jpeg';
import img8 from './img/19.jpeg';
import img9 from './img/emojimovie.jpeg';

import {FaTv} from "react-icons/fa"
import { AiOutlineRight, AiOutlineUsergroupAdd,AiOutlineHome,AiOutlinePlayCircle} from "react-icons/ai"
import {BsPlay, BsBookmarkPlus, BsSearch} from "react-icons/bs"

function App() {
  return (
    <div className="App">
      <div className="navbar">
      <div className="navbar-container">
        <a href="home"><div className="logo-container">Binary. Movies</div></a>
        <div className="menu-container">
          <ul className="menu-list">
              <a href="home"><li className="menu-list-item active">Home</li></a>
              <a href="movies"><li className="menu-list-item">Movies</li></a>
              <a href="series"><li className="menu-list-item">Series</li></a>
             <a href="popular"> <li className="menu-list-item">Popular</li></a>
             <a href="trends"> <li className="menu-list-item">Trends</li></a>
          </ul>
        </div>
        <div className="profile-container">
          <img className="profile-pics" src={waza} alt=""></img>
          <input type="text" className="search" placeholder="Search movies" ></input>
        </div>
        
        <div className="profile-text-container">
            <span className="logout-text">log-out</span>
          </div>
        </div>
      </div>
      <div className="sidebar">
      <div className="left-menu-icon"><AiOutlineHome></AiOutlineHome></div>
      <div className="left-menu-icon"><AiOutlineUsergroupAdd></AiOutlineUsergroupAdd></div>
      <div className="left-menu-icon"><BsBookmarkPlus></BsBookmarkPlus></div>
      <div className="left-menu-icon"><BsSearch></BsSearch></div>
      <div className="left-menu-icon"><FaTv></FaTv></div>
     <i><img src="./home-solid.svg" alt=""></img></i>
      </div>
      <div className="container">
        <div className="content-container">
          <div className="featured-container">
            <img src={picture} alt="hero_banner" className="featured-title-image"></img>
            <p className="feature-desc">With the help of a German bounty-hunter,<br /> a freed slave sets out to rescue his wife <br/>from a brutal plantation-owner in Mississippi.</p>
            <p className="feature-desc genre"><span className="span-genre">Genre</span>: Action.Drama.True-Life Event</p>
            <button className="featured-button"><BsPlay className="play"></BsPlay>  Watch Now</button><a href="https://www.youtube.com/watch?v=0fUCuvNlOCg&t=25s/ "target="_blank"><button type="button" className="featured-button-watch-trailer" onClick="newWindow()" >Watch Trailer</button></a>
   
          </div>
        </div>
        <div className="movie-list-container">
        <h1 className="movie-list-title">NEW RELEASES</h1>
        <div className="movie-list-wrapper">
          <div className="movie-list">
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={img1} alt="screen_1" />
                <AiOutlinePlayCircle className="inner-play"></AiOutlinePlayCircle>
                
                
            </div>
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={img2} alt="screen_2" />
              <AiOutlinePlayCircle className="inner-play"></AiOutlinePlayCircle>
               
            </div>
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={img3} alt="screen_3" />
              <AiOutlinePlayCircle className="inner-play"></AiOutlinePlayCircle>
                
            </div>
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={img4} alt="screen_4" />
              <AiOutlinePlayCircle className="inner-play"></AiOutlinePlayCircle>
                
            </div>
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={img5} alt="screen_4" />
                <span className="movie-list-item-title"></span>
                <p className="movie-list-item-desc"></p>
                
            </div>
          </div>
            <AiOutlineRight className="arrow-right"></AiOutlineRight>     
        </div>
      </div>
      <div className="movie-list-container">
        <h1 className="movie-list-title"></h1>
        <div className="movie-list-wrapper">
          <div className="movie-list">
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={img6} alt="screen_1" />
              <AiOutlinePlayCircle className="inner-play"></AiOutlinePlayCircle>
               
            </div>
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={img7} alt="screen_2" />
              <AiOutlinePlayCircle className="inner-play"></AiOutlinePlayCircle>
               
            </div>
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={img8} alt="screen_3" />
              <AiOutlinePlayCircle className="inner-play"></AiOutlinePlayCircle>
                
            </div>
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={img9} alt="screen_4" />
              <AiOutlinePlayCircle className="inner-play"></AiOutlinePlayCircle>
               
            </div>
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={img1} alt="screen_4" />
              <AiOutlinePlayCircle className="inner-play"></AiOutlinePlayCircle>
                
            </div>
            <div className="movie-list-item">
              <img className="movie-list-item-img" src={img1} alt="screen_4" />
              <AiOutlinePlayCircle className="inner-play"></AiOutlinePlayCircle>
                
            </div>
          </div>
            <AiOutlineRight className="arrow-right"></AiOutlineRight>
        </div>
      </div>
      <div className="content-container">
          <div className="featured-container-2">
            <img src={picture2} alt="hero_banner" className="featured-title-image"></img>
            <p className="feature-desc">Martial-arts master Shang-Chi confronts the past he thought he left <br /> behind when he's drawn into the web of the <br />mysterious Ten Rings organization.</p>
            <p className="feature-desc genre"><span className="span-genre">Genre</span>: Action.</p>
            <button className="featured-button"><BsPlay className="play"></BsPlay>  Watch Now</button><a href="https://www.youtube.com/watch?v=0fUCuvNlOCg&t=25s/ "target="_blank"><button type="button" className="featured-button-watch-trailer" onClick="newWindow()" >Watch Trailer</button></a>
   
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-class">

        </div>
      </footer>
    </div>
    
  );
  class MyWebsite extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <hi>This is my First React</hi>
            </div>
        )
    }
}
}

export default App;

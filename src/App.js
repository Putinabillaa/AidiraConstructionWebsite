// App.js
import React, { useState } from 'react';
import './App.css';
import PhotoAlbum from "react-photo-album";

import logohome from './asset/logo-notext.png';
import logo from './asset/logo.png';
import whatsapp from './asset/whatsapp.png';
import sidebar from './asset/sidebar.png';

import en from './lang/en.json';
import id from './lang/id.json';

import image1 from './asset/images/image1.jpeg';
import image2 from './asset/images/image2.jpeg';
import image3 from './asset/images/image3.jpeg';
import image4 from './asset/images/image4.jpeg';
import image5 from './asset/images/image5.jpeg';
import image6 from './asset/images/image6.jpeg';
import image7 from './asset/images/image7.jpeg';
import image8 from './asset/images/image8.jpeg';
import image9 from './asset/images/image9.jpeg';
import image10 from './asset/images/image10.jpeg';
import image11 from './asset/images/image11.jpeg';
import image12 from './asset/images/image12.jpeg';
import image13 from './asset/images/image13.jpeg';
import image14 from './asset/images/image14.jpeg';
import image15 from './asset/images/image15.jpeg';
import image16 from './asset/images/image16.jpeg';
import image17 from './asset/images/image17.jpeg';
import image18 from './asset/images/image18.jpeg';
import image19 from './asset/images/image19.jpeg';
import image20 from './asset/images/image20.jpeg';
import image21 from './asset/images/image21.jpeg';
import image22 from './asset/images/image22.jpeg';
import image23 from './asset/images/image23.jpeg';
import image24 from './asset/images/image24.jpeg';
import image25 from './asset/images/image25.jpeg';
import image26 from './asset/images/image26.jpeg';
import image27 from './asset/images/image27.jpeg';
import image28 from './asset/images/image28.jpeg';
import image29 from './asset/images/image29.jpeg';
import image30 from './asset/images/image30.jpeg';
import image31 from './asset/images/image31.jpeg';
import image32 from './asset/images/image32.jpeg';


function App() {
  const [language, setLanguage] = useState('id');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLanguageChange = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'id' : 'en'));
    setSidebarOpen(false);
  };

  const currentLanguage = language === 'en' ? en : id;

  const toggleSidebar = () => {
    setSidebarOpen((prevSidebarOpen) => !prevSidebarOpen);
  };

  const aboutusClicked = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setSidebarOpen(false);
  }

  const servicesClicked = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
    setSidebarOpen(false);
  }

  const portofolioClicked = () => {
    window.scrollTo({
      top: 1300,
      behavior: "smooth",
    });
    setSidebarOpen(false);
  }

  const contactClicked = () => {
    window.scrollTo({
      top: 7000,
      behavior: "smooth",
    });
    setSidebarOpen(false);
  }

  const photos = [
    { src: image1, width: 1500, height: 900 },
    { src: image2, width: 1500, height: 900 },
    { src: image3, width: 1500, height: 900 },
    { src: image4, width: 1500, height: 900 },
    { src: image5, width: 1500, height: 900 },
    { src: image6, width: 1500, height: 900 },
    { src: image7, width: 1500, height: 900 },
    { src: image8, width: 1500, height: 900 },
    { src: image9, width: 1500, height: 900 },
    { src: image10, width: 1500, height: 900 },
    { src: image11, width: 1500, height: 900 },
    { src: image12, width: 1500, height: 900 },
    { src: image13, width: 1500, height: 900 },
    { src: image14, width: 1500, height: 900 },
    { src: image15, width: 1500, height: 900 },
    { src: image16, width: 1500, height: 900 },
    { src: image17, width: 1500, height: 900 },
    { src: image18, width: 1500, height: 900 },
    { src: image19, width: 1500, height: 900 },
    { src: image20, width: 1500, height: 900 },
    { src: image21, width: 1500, height: 900 },
    { src: image22, width: 1500, height: 900 },
    { src: image23, width: 1500, height: 900 },
    { src: image24, width: 1500, height: 900 },
    { src: image25, width: 1500, height: 900 },
    { src: image26, width: 1500, height: 900 },
    { src: image27, width: 1500, height: 900 },
    { src: image28, width: 1500, height: 900 },
    { src: image29, width: 1500, height: 900 },
    { src: image30, width: 1500, height: 900 },
    { src: image31, width: 1500, height: 900 },
    { src: image32, width: 1500, height: 900 },
  ];

  return (
    <div className="App">
      <div className="line-header" />
      <div className={`sidebar${sidebarOpen ? 'open' : ''}`}>
        <button className="lang-button-sidebar" onClick={handleLanguageChange}>
          {language === 'en' ? 'IND' : 'EN'}
        </button>
        <button className="text-button-sidebar" onClick={aboutusClicked}>{currentLanguage.aboutus}</button>
        <button className="text-button-sidebar" onClick={servicesClicked}>{currentLanguage.services}</button>
        <button className="text-button-sidebar" onClick={portofolioClicked}>{currentLanguage.portfolio}</button>
        <button className="text-button-sidebar" onClick={contactClicked}>{currentLanguage.contact}</button>
      </div>
      <header className="App-header">
        <button className="sidebar-button" onClick={toggleSidebar}>
          <img src={sidebar} alt="Sidebar"/>
        </button>
        <button className="logo-home" onClick={aboutusClicked}>
          <img src={logohome} alt="Home" />
        </button>
        <button className="lang-button" onClick={handleLanguageChange}>
          {language === 'en' ? 'IND' : 'EN'}
        </button>
        <button className="text-button" onClick={aboutusClicked}>{currentLanguage.aboutus}</button>
        <button className="text-button" onClick={servicesClicked}>{currentLanguage.services}</button>
        <button className="text-button" onClick={portofolioClicked}>{currentLanguage.portfolio}</button>
        <button className="text-button" onClick={contactClicked}>{currentLanguage.contact}</button>
        <img src={whatsapp} className="whatsapp-image" alt="whatsapp" />
        <a href={currentLanguage['wa-link']} target="_blank"  rel="noreferrer" className='wa-link'>{currentLanguage['phone-number']}</a>
      </header>
      <div className="App-body">
        <div className='about-us-section'>
          <img src={logo} className='logo' alt="Logo" />
          <h1>{currentLanguage.aboutus}</h1>
          <p>{currentLanguage.aboutusdesc}</p>
        </div>
        <div className='services-section'>
          <h1>{currentLanguage.services}</h1>
          <ul>
            <li key='1'>{currentLanguage.service1}</li>
            <li key='2'>{currentLanguage.service2}</li>
            <li key='3'>{currentLanguage.service3}</li>
            <li key='4'>{currentLanguage.service4}</li>
            <li key='5'>{currentLanguage.service5}</li>
            <li key='6'>{currentLanguage.service6}</li>
          </ul>
        </div>
        <div className='portofolio-section'>
          <h1>{currentLanguage.portfolio}</h1>
          <PhotoAlbum layout="rows" photos={photos}/>
        </div>
      </div>
      <footer className="App-footer">
        <a href={currentLanguage['mailto-link']} target="_blank"  rel="noreferrer">{currentLanguage.email}</a>
        <a href={currentLanguage['wa-link']} target="_blank"  rel="noreferrer">{currentLanguage.phone}</a>
        <a href={currentLanguage['ig-link']} target="_blank"  rel="noreferrer">{currentLanguage.instagram}</a>
        <p className='mark'>Made with ❤️ Putinabillaa</p>
      </footer>
    </div>
  );
}

export default App;

import React from 'react'
import './Footer.css'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={facebook_icon}  alt='/'/>
        <img src={instagram_icon}  alt='/'/>
        <img src={twitter_icon}  alt='/'/>
        <img src={youtube_icon}  alt='/'/>
      </div>
      <ul>
        <li>Audio Decription</li>
        <li>help center</li>
        <li>gift cards</li>
        <li>investor relations</li>
        <li>jobs</li>
        <li>terms of use</li>
        <li>media center</li>
        <li>privacy</li>
        <li>legal notices</li>
        <li>cookie preferences</li>
        <li>corporate information</li>
        <li>contact us</li>
      </ul>
      <p className='copyright-text'> ©️ 1997-2024, Inc.</p>
    </div>
  )
}

export default Footer

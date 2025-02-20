import React from 'react'
import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div>
    <section className="link">
      <div className="logos">
        <li><FacebookIcon/></li>
        <li><InstagramIcon/></li>
        <li><TwitterIcon/></li>
        <li><YouTubeIcon/></li>
      </div>
      <div className="sub-links">
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
          <li>Service Code</li>
          </ul>
          <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>cookie preferance</li>
          </ul>
          <ul>
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
          </ul>
          <ul>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </section>
    <footer>
      <p> &copy; 1997-2025 Netflix, Inc.</p>
      <p>Carlos Avila &copy 2025</p>
    </footer>
    </div>
  )
}

export default Footer

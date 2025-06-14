import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.instagram.com/" className="home__socials-link" target='_blank'>
            <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://github.com/dashboard" className="home__socials-link" target='_blank'>
            <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/feed/" className="home__socials-link" target='_blank'>
            <i class="fa-brands fa-linkedin"></i>
        </a>
    </div>
  )
}

export default HeaderSocials
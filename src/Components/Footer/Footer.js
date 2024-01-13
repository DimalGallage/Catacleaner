import './Footer.css';
import logo from '../../StaticAssets/logo.png'

function Footer() {
  return (

    <div className='footer'>
      <div className='logo'>
      <img src={logo} alt="Logo" className="logoImg" width="10%" />
      <div className=''>

      </div>
      </div>
      <div className='linkContainer'>
        <div className='linkSubContainer'>
          <p className='linkHeader'>Product</p>
          <a className='link' href='#'>Updates</a>
          <a className='link' href='#'>Security</a>
          <a className='link' href='#'>Twitter Intergration</a>
        </div>
        <div className='linkSubContainer'>
        <p className='linkHeader'>Company</p>
          <a className='link' href='#'>About</a>
          <a className='link' href='#'>Blog</a>
          <a className='link' href='#'>Read More</a>
        </div>
        <div className='linkSubContainer'>
        <p className='linkHeader'>Industries</p>
          <a className='link' href='#'>Startups</a>
          <a className='link' href='#'>Commerical Use</a>
          <a className='link' href='#'>Academic Research</a>
        </div>
        <div className='linkSubContainer'>
        <p className='linkHeader'>Help</p>
          <a className='link' href='#'>Talk to support</a>
          <a className='link' href='#'>Support Docs</a>
          <a className='link' href='#'>API Docs</a>
          <a className='link' href='#'>System Status</a>
        </div>

        <div className='signupContainer'>
        <p className='linkHeader'>Try DataCleaner for Free</p>
          <div className='signupFieldMain'>
            <input type={"text"} placeholder={"Enter Your Email"}/>
            <button>Get Started</button>
          </div>
        </div>

      </div>
      <hr className='divider' width={"100%"}/>
      <div className='policyMain'>
        <p className='headerMini copyright'>Data Cleaner | Copyright 2023</p>
        <p className='headerMini policy'>Terms & Conditions</p>
        <p className='headerMini '>Privacy Policy</p>
      </div>

    </div>

  );
}

export default Footer;
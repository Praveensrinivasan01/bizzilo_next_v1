'use client';
import Link from 'next/link';
import React, { useState } from 'react'
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  // const [fix, setFix] = useState(false);

  const handleToggleClick = (event) => {
    setIsActive((current) => !current);
  };




  return (
    < >
      <header className="sticky-top">
        <div className='container'>
          <nav>
            <div className='mobileHeader'>
              <div className='brandlogo'>
                <img src="/assets/images/bizzilo_logo.png" alt='BizziloLogo' />
              </div>

              <div className="mobileToggle">
                <button className="emptyBtn" onClick={handleToggleClick}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
            <div className={isActive ? ' navbarCollapse show' : 'navbarCollapse'}>
              <div className='margin_auto'>
                <ul>
                  <li>
                    <button>Solutions</button>
                  </li>
                  <li>
                    <button>Resources</button>
                  </li>
                  <li>
                    <Link href={'/about-us'}>
                      <button>About</button>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/pricing'
}>
                   
                    <button>Pricing</button>
                     </Link>
                  </li>
                </ul>
              </div>
              <div className='displayInlineFlex alignItem_center gap16'>
                <div>
                  <Link href={'/account-creation'}>
                    <button className='mainbutton transparentbtn'>Sign in</button></Link></div>
                <div>
                  <button className='mainbutton ruinedSmoresbtn'>Sign Up Now</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header;

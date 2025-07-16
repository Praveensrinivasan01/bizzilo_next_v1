import React from 'react'
import Link from 'next/link';




const Footer = () => {
  return (
    <footer>
      <div className='container'>


        <div className='row mb_74'>
          <div className='col-lg-4'>
            <img src="/assets/images/footer_logo.png" className='footerlogo' alt='BizziloFooterLogo' />
            <p className='fontSize14 fontWeight400 midnightSkyText_clr mb_16 rockabillyText_clr'>BIZZILO SOLUTIONS PRIVATE LIMITED VILLA 31 S 135/3 P.NO7B, MALLES AKKANSHA NOOKAM, Pallikaranai, Tambaram, Kanchipuram, Tamilnadu- 600100</p>





          </div>
          <div className='col-lg-6 offset-lg-2'>

            <div className='row'>
              <div className='col-lg-4'>
                <div className='latestItem  mobspaceMb_24'>
                  <img src="/assets/images/pos_delivery.png" alt='Posdelivery' />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='latestItem'>
                  <img src="/assets/images/ai_lastmaildelivery.png" alt='Ailastmaildelivery' />
                </div>
              </div>
            </div>

          </div>

        </div>


        <div className='row'>
          <div className='col-lg-4 mobspaceMb_24'>

            <div className='mb_24'>
              <input type='text' placeholder='Name' className='footerInput' />
            </div>
            <div className='mb_24'>
              <input type='text' placeholder='Email' className='footerInput' />
            </div>


            <div className='inputCheckbox'>
              <input
                type='checkbox'
                id='leaveAtMydoorstep'
              />
              <label htmlFor='leaveAtMydoorstep'>

                <div>
                  I consent to receiving newsletters, updates, insights, and other related communications from bizzilo at the above name and email address
                </div>
              </label>
            </div>


            <button className='subscribebtn'>
              <span>Subscribe</span>
              <div className='iconFrame'> <img src="/assets/images/leftarrow.svg" alt='Leftarrow' /></div>
            </button>


          </div>
          <div className='col-lg-6 offset-lg-2'>
            <div className='row mobspaceMb_24'>
              <div className='col-lg-3 mobspaceMb_24'>
                <h5 className='fontSize14 fontWeight500 midnightSkyText_clr mb_16'>Solutions</h5>
                <ul className='footerLink'>
                  <li>
                    <Link href="#">Ecom</Link>
                  </li>
                  <li>
                    <Link href="#">Pos</Link>
                  </li>
                  <li>
                    <Link href="#">Inventory</Link>
                  </li>
                </ul>
              </div>


              <div className='col-lg-3 mobspaceMb_24'>
                <h5 className='fontSize14 fontWeight500 midnightSkyText_clr mb_16'>Resources</h5>
                <ul className='footerLink'>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Newsletter</Link>
                  </li>
                  <li>
                    <Link href="#">Academic</Link>
                  </li>
                </ul>
              </div>

              <div className='col-lg-3 mobspaceMb_24'>

                <h5 className='fontSize14 fontWeight500 midnightSkyText_clr mb_16'>Company</h5>
                <ul className='footerLink'>
                  <li>
                    <Link href="#">About</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>

                </ul>

              </div>

              <div className='col-lg-3'>

                <h5 className='fontSize14 fontWeight500 midnightSkyText_clr mb_16'>Social</h5>

                <div className='displayFlex alignItem_center gap20'>
                  <div>
                    <Link href="#">
                      <img src="/assets/images/linkedin_icon.svg" alt='LinkedinIcon' />
                    </Link>
                  </div>
                  <div>
                    <Link href="#">
                      <img src="/assets/images/facebook_icon.svg" alt='FacebookIcon' /></Link></div>
                </div>
              </div>
            </div>

          </div>
        </div>


        <ul className='legalPolicy'>
          <li>
            <Link href="#">2025 Bizzilo</Link>
          </li>
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Terms of Service</Link>
          </li>
        </ul>


      </div>
    </footer>
  )
}

export default Footer;

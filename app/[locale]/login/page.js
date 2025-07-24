import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className='accountCreation_sec'>
            <div className='container'>
                <div className='row alignItem_center '>
                    <div className='col-lg-6'>
                    <div className='balljumbingFrame'>
                        <div className="ball">
                            <img src="/assets/images/ball_jump.png" alt='ball_jump' />
                        </div>
                        <div className="ballshadow"></div>

                        </div>

                    </div>
                    <div className='col-lg-6'>
                        <div className='accountCreationFrame'>
                            <Link href="#" className='mb_32 displayInlineFlex alignItem_center gap12  blackText_Clr fontSize16 fontWeight600 textDecoration_unset'>
                                <img className='blackFilter width14px' src="/assets/images/leftarrow.svg" alt='leftarrow' />
                                <span>Back</span>
                            </Link>

                            <h2 className='ruinedSmoresText_clr fontSize18 fontWeight700 mb_32'>Login</h2>

                            <form>
                                <div className='mb_24'>
                                    <label className='labeltext'>User Name</label>
                                    <input type='text' placeholder='' className='mainInput' />
                                </div>

             
                                <div className='mb_24'>
                                    <label className='labeltext'>Password</label>
                                    <input type='text' placeholder='' className='mainInput' />
                                </div>
                   

                                <button className='loginBtn mb_32'>Login</button>

                                <Link href={'/account-creation'} className='textDecoration_unset fontSize18 fontWeight600 ruinedSmoresText_clr textalign_center display_block'>Create Account</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page

import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className='demoSuccessfullyscheduled_sec'>
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
                                           <h2 className='ruinedSmoresText_clr fontSize30 fontWeight600 mb_8 textalign_center'>Demo successfully scheduled!</h2>
                            <p className='midnightSkyText_clr fontSize18 fontWeight400 mb_50 textalign_center'>We look forward to connecting with you soon</p>

                            <p className='blackManatext_clr fontSize12 fontWeight400 mb_12 textalign_center'>Scheduled Time</p>
                            <h5 className='blackText_Clr fontSize16 fontWeight500 mb_60 textalign_center'>03 August 2025 - 3:15pm</h5>

                            <button className='loginBtn'>Back to Home</button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page

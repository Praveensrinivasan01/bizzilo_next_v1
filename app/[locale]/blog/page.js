import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='blackHeader'>

                <div className='container'>
                    <nav>
                        <div className='blogTitle'>
                            <h2>Blogs</h2>
                            <span className='whiteText_Clr'>|</span>
                            <h5 className='fontSize18 fontWeight400 whiteText_Clr'>Stay Updated on E-commerce, Inventory Management & POS</h5>
                        </div>

                        <div className="inputMate">
                            <div className="inputMatePrepend">
                                <span className="inputMateText">

                                    <img src="/assets/images/search_icon.svg" alt='search' />
                                </span>
                            </div>
                            <input
                                autoComplete="off"
                                placeholder="Search by..."
                            />

                        </div>
                    </nav>

                </div>
            </div>
            <section className='latestBlog_sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <h3 className='fontSize18 fontWeight500 darkOrchestra_clr mb_32'>The Latest</h3>

                        <div className=''>

                        
                                <img src="/assets/images/business_professional.png" alt='business_professional' />
                        </div>


                        </div>
                        <div className='col-lg-4'>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page

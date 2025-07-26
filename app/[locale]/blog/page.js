"use client";
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const page = () => {
    const browsebycategoriesSlider = {
        rows: 2,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        initialSlide: 1,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
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
                        <div className='col-lg-7'>
                            <h3 className='fontSize18 fontWeight500 darkOrchestra_clr mb_32'>The Latest</h3>
                            <div className='latestBlogframe  mobspaceMb_24'>
                                <div className='latestbrowsebycategories_img'>
                                    <img src="/assets/images/business_professional.png" alt='business_professional' />
                                </div>

                                <div className='displayFlex alignItem_center justifyContent_spacebetween mb_24'>
                                    <div>
                                        <h4 className='fontSize16 fontWeight500 hotOrangetext_clr'>Inventory Management</h4>
                                    </div>
                                    <div>
                                        <span className='fontSize14 fontWeight400 mauveMoletext_clr'>October 14, 2023</span>
                                    </div>
                                </div>


                                <h2 className='fontSize20 fontWeight600 darkOrchestra_clr mb_14'>Market Trends: What's Next for Investors?</h2>
                                <p className='fontSize16 fontWeight400 darkOrchestra_clr'>Miriam’s journey with Odoo began in 2020 when she joined the sales team as an Account Manager for the EMEA market. Her first impression of the company was strikingly different from what.</p>
                            </div>

                        </div>
                        <div className='col-lg-1'>
                            <div className='blogcenterDivider'></div>

                        </div>
                        <div className='col-lg-4'>
                            <h3 className='fontSize18 fontWeight500 darkOrchestra_clr mb_32'>Trending</h3>


                            <div className='trendingItem'>
                                <span>POS</span>
                                <h4>Market Trends: What's Next for Investors?</h4>
                                <p>Miriam’s journey with Odoo began in 2020 when she joined the sales team as an Account Manager for the</p>
                                <h6>October 14, 2023</h6>
                            </div>
                            <div className='trendingItem'>
                                <span>E-commerce</span>
                                <h4>Market Trends: What's Next for Investors?</h4>
                                <p>Miriam’s journey with Odoo began in 2020 when she joined the sales team as an Account Manager for the</p>
                                <h6>October 14, 2023</h6>
                            </div>

                            <div className='trendingItem'>
                                <span>POS</span>
                                <h4>Market Trends: What's Next for Investors?</h4>
                                <p>Miriam’s journey with Odoo began in 2020 when she joined the sales team as an Account Manager for the</p>
                                <h6>October 14, 2023</h6>
                            </div>
                            <div className='trendingItem'>
                                <span>E-commerce</span>
                                <h4>Market Trends: What's Next for Investors?</h4>
                                <p>Miriam’s journey with Odoo began in 2020 when she joined the sales team as an Account Manager for the</p>
                                <h6>October 14, 2023</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className='browsebycategories_sec'>
                <div className='container'>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="alltab">
                        <div className='row'>
                            <div className='col-lg-2 mobspaceMb_24'>
                                <h3 className='fontSize16 fontWeight600 midnightSkyText_clr mb_16'>Browse by categories</h3>

                                <Nav className="flex-column browsebycategoriesTab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="alltab">All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="postab">Pos</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ecomtab">Ecom</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="inventorytab">Inventory</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="miniERPtab">Mini ERP</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className='col-lg-10'>
                                <Tab.Content>
                                    <Tab.Pane eventKey="alltab">
                                        <Slider {...browsebycategoriesSlider} className='browsebycategoriesSlider'>
                                            <div className='browsebycategoriesItem'>
                                                <div className='browsebycategories_img'>
                                                    <img src="/assets/images/aiFor_lastmile.png" alt='AiForlastmile' />
                                                </div>
                                                <div className='browsebycategories_content'>
                                                    <h5>Ecom</h5>
                                                    <h2>Cultural Shifts: The Impact of Modern Art</h2>
                                                    <p>October 10, 2023 - 4 Mins Read</p>
                                                </div>
                                            </div>
                                            <div className='browsebycategoriesItem'>
                                                <div className='browsebycategories_img'>
                                                    <img src="/assets/images/small_business.png" alt='Smallbusiness' />
                                                </div>
                                                <div className='browsebycategories_content'>
                                                    <h5>Ecom</h5>
                                                    <h2>Cultural Shifts: The Impact of Modern Art</h2>
                                                    <p>October 10, 2023 - 4 Mins Read</p>
                                                </div>
                                            </div>
                                            <div className='browsebycategoriesItem'>
                                                <div className='browsebycategories_img'>
                                                    <img src="/assets/images/digital_newlife.png" alt='Digitalnewlife' />
                                                </div>
                                                <div className='browsebycategories_content'>
                                                    <h5>Ecom</h5>
                                                    <h2>Cultural Shifts: The Impact of Modern Art</h2>
                                                    <p>October 10, 2023 - 4 Mins Read</p>
                                                </div>
                                            </div>

                                            <div className='browsebycategoriesItem'>
                                                <div className='browsebycategories_img'>
                                                    <img src="/assets/images/aiFor_lastmile.png" alt='AiForlastmile' />
                                                </div>
                                                <div className='browsebycategories_content'>
                                                    <h5>Ecom</h5>
                                                    <h2>Cultural Shifts: The Impact of Modern Art</h2>
                                                    <p>October 10, 2023 - 4 Mins Read</p>
                                                </div>
                                            </div>
                                            <div className='browsebycategoriesItem'>
                                                <div className='browsebycategories_img'>
                                                    <img src="/assets/images/small_business.png" alt='Smallbusiness' />
                                                </div>
                                                <div className='browsebycategories_content'>
                                                    <h5>Ecom</h5>
                                                    <h2>Cultural Shifts: The Impact of Modern Art</h2>
                                                    <p>October 10, 2023 - 4 Mins Read</p>
                                                </div>
                                            </div>
                                            <div className='browsebycategoriesItem'>
                                                <div className='browsebycategories_img'>
                                                    <img src="/assets/images/digital_newlife.png" alt='Digitalnewlife' />
                                                </div>
                                                <div className='browsebycategories_content'>
                                                    <h5>Ecom</h5>
                                                    <h2>Cultural Shifts: The Impact of Modern Art</h2>
                                                    <p>October 10, 2023 - 4 Mins Read</p>
                                                </div>
                                            </div>

                                        </Slider>

                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </div>
                    </Tab.Container>
                </div>
            </section>
        </>
    )
}

export default page

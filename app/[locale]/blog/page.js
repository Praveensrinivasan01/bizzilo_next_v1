"use client";
import Link from 'next/link'
import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import BlogSlider from '../../../components/BlogSlider';

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
                        <div className='col-lg-7'>
                            <h3 className='fontSize18 fontWeight500 darkOrchestra_clr mb_32'>The Latest</h3>
                            <div className='latestBlogframe'>
                                <div className='latestBlogImg'>
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
                            <h3 className='fontSize18 fontWeight500 darkOrchestra_clr mb_32'>The Latest</h3>


                            <div className='latestItem'>
                                <span>POS</span>
                                <h4>Market Trends: What's Next for Investors?</h4>
                                <p>Miriam’s journey with Odoo began in 2020 when she joined the sales team as an Account Manager for the</p>
                                <h6>October 14, 2023</h6>
                            </div>
                            <div className='latestItem'>
                                <span>E-commerce</span>
                                <h4>Market Trends: What's Next for Investors?</h4>
                                <p>Miriam’s journey with Odoo began in 2020 when she joined the sales team as an Account Manager for the</p>
                                <h6>October 14, 2023</h6>
                            </div>

                            <div className='latestItem'>
                                <span>POS</span>
                                <h4>Market Trends: What's Next for Investors?</h4>
                                <p>Miriam’s journey with Odoo began in 2020 when she joined the sales team as an Account Manager for the</p>
                                <h6>October 14, 2023</h6>
                            </div>
                            <div className='latestItem'>
                                <span>E-commerce</span>
                                <h4>Market Trends: What's Next for Investors?</h4>
                                <p>Miriam’s journey with Odoo began in 2020 when she joined the sales team as an Account Manager for the</p>
                                <h6>October 14, 2023</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className=''>
                <div className='container'>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="alltab">
                        <div className='row'>
                            <div className='col-md-3'>
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
                            <div className='col-md-9'>
                                <Tab.Content>
                                    <Tab.Pane eventKey="alltab">

                    
                 <BlogSlider/>


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

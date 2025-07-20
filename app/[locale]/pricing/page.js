"use client";
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const page = () => {
    return (
        <>
            <div className='blackHeader'>

                <div className='container'>
                    <h2>Pricing</h2>
                </div>
            </div>
            <section className='pricing_sec'>
                <div className='container'>
                    <div className='textalign_center'>
                        <Tabs
                            defaultActiveKey="Monthly"
                            id="uncontrolled-tab-example"
                            className="bizziloTab"
                        >
                            <Tab eventKey="Monthly" title="Monthly">
                                <div className='monthlyPricingFrame'>
                                    <div className='row justifyContent_center'>

                                        <div className='col-lg-4 '>
                                            <div className='monthlyPricingItem '>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Start</h3>
                                                <h2>₹999</h2>
                                                <p>Product Catalog Management Product Catalog Management Product Catalog Management Product Catalog ManagementProduct Catalog Management Product Catalog Management</p>

                                                <button>Get Started</button>

                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='monthlyPricingItem'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Grow</h3>
                                                <h2>₹1,499</h2>
                                                <p>Product Catalog Management Product Catalog Management Product Catalog Management Product Catalog ManagementProduct Catalog Management Product Catalog Management</p>

                                                <button>Get Started</button>

                                            </div>
                                        </div>
                                        <div className='col-lg-4 '>
                                            <div className='monthlyPricingItem recommendedFrame'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Accelerate</h3>
                                                <h2>₹4,999</h2>
                                                <p>Product Catalog Management Product Catalog Management Product Catalog Management Product Catalog ManagementProduct Catalog Management Product Catalog Management</p>

                                                <button>Get Started</button>

                                            </div>
                                        </div>
                                        <div className='col-lg-4 offset-lg-1'>
                                            <div className='monthlyPricingItem'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Scale</h3>
                                                <h2>₹9,999</h2>
                                                <p>Product Catalog Management Product Catalog Management Product Catalog Management Product Catalog ManagementProduct Catalog Management Product Catalog Management</p>

                                                <button>Get Started</button>

                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='monthlyPricingItem'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Enterprise Plan</h3>
                                                <h2>Custom</h2>
                                                <p>Product Catalog Management Product Catalog Management Product Catalog Management Product Catalog ManagementProduct Catalog Management Product Catalog Management</p>

                                                <button>Get Started</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Tab>
                            <Tab eventKey="yearlyoff" title={<> Yearly <span className='flaxFlowerBlueText_clr'>25% off</span></>}>
                            </Tab>

                        </Tabs>
                    </div>


                </div>
            </section>

            <section className='comparePlans_sec'>
                <div className='container'>
                    <h2 className='fontSize30 fontWeight600 ruinedSmores_clr  textalign_center mb_60'>Compare Plans</h2>


                    <div className='comparePlansTable'>
                        <table className='tableResponsive'>
                            <thead>
                                <tr>
                                    <th >Feature’s</th>
                                    <th>
                                        <div className='displayInlineFlex alignItem_center gap10'>
                                            <div className='plansframe startplan'>
                                                <img src="/assets/images/star_icon.svg" alt='Start' />
                                            </div>
                                            <div><h5 className='fontSize18 fontWeight600 ruinedSmoresText_clr'>Start</h5></div>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='displayInlineFlex alignItem_center gap10'>
                                            <div className='plansframe growplan'>
                                                <img src="/assets/images/star_icon.svg" alt='Start' />
                                            </div>
                                            <div><h5 className='fontSize18 fontWeight600 ruinedSmoresText_clr'>Grow</h5></div>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='displayInlineFlex alignItem_center gap10'>
                                            <div className='plansframe accelerateplan'>
                                                <img src="/assets/images/star_icon.svg" alt='Start' />
                                            </div>
                                            <div><h5 className='fontSize18 fontWeight600 ruinedSmoresText_clr'>Accelerate</h5></div>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='displayInlineFlex alignItem_center gap10'>
                                            <div className='plansframe scaleplan'>
                                                <img src="/assets/images/star_icon.svg" alt='Start' />
                                            </div>
                                            <div><h5 className='fontSize18 fontWeight600 ruinedSmoresText_clr'>Scale</h5></div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='fontSize18 fontWeight600 ruinedSmoresText_clr'>Basic</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Companies</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Multi currency</td>
                                    <td>Coming soon</td>
                                    <td>Coming soon</td>
                                    <td>Coming soon</td>
                                    <td>Coming soon</td>
                                </tr>
                                <tr>
                                    <td>Multi language</td>
                                    <td>Coming soon</td>
                                    <td>Coming soon</td>
                                    <td>Coming soon</td>
                                    <td>Coming soon</td>
                                </tr>
                                <tr>
                                    <td>Stores</td>
                                    <td>1</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>Users</td>
                                    <td>2</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>Warehouses</td>
                                    <td>1</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>200</td>
                                </tr>

                                <tr>
                                    <td className='fontSize18 fontWeight600 ruinedSmoresText_clr'>Product catalogue</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>Barcode</td>
                                    <td>Barcode</td>
                                    <td>Barcode</td>
                                    <td>Barcode</td>
                                    <td>Barcode</td>
                                </tr>
                                <tr>
                                    <td>Categories</td>
                                    <td>Categories</td>
                                    <td>Categories</td>
                                    <td>Categories</td>
                                    <td>Categories</td>
                                </tr>
                                <tr>
                                    <td>Collections</td>
                                    <td>Collections</td>
                                    <td>Collections</td>
                                    <td>Collections</td>
                                    <td>Collections</td>
                                </tr>
                                <tr>
                                    <td>Combos/groups</td>
                                    <td>Combos/groups</td>
                                    <td>Combos/groups</td>
                                    <td>Combos/groups</td>
                                    <td>Combos/groups</td>
                                </tr>
                                <tr>
                                    <td>Products</td>
                                    <td>Products</td>
                                    <td>Products</td>
                                    <td>Products</td>
                                    <td>Products</td>
                                </tr>
                                <tr>
                                    <td>Qr code</td>
                                    <td>Qr code</td>
                                    <td>Qr code</td>
                                    <td>Qr code</td>
                                    <td>Qr code</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page

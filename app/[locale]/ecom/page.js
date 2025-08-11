"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link'
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const page = () => {


    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     // const arr = ["+=110%", "+=60%", "top +=0px"];
    //     const arr = ["+=100%", "+80%", "+=0px"];
    //     // Get all the cards
    //     const panels = gsap.utils.toArray(".advanceFeatures_item");
    //     console.log("Panels array length:", panels.length);

    //     // Set each card to overlap the previous
    //     panels.forEach((panel, i) => {
    //         gsap.to(panel, {
    //             scrollTrigger: {
    //                 trigger: panel,
    //                 start: "top 10%",
    //                 end: arr[i],
    //                 pin: true,
    //                 scrub: true,
    //                 pinSpacing: false, // important for overlap
    //                 markers: true, // remove in production
    //             }
    //         });
    //     });
    // }, []);
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Kill any old triggers
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  // Only run animation if desktop
  if (window.innerWidth >= 768) {
    const panels = gsap.utils.toArray(".advanceFeatures_item");
    const arr = ["+=100%", "+=55%", "+=0%"];

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: arr[i],
        pin: true,
        scrub: true,
        pinSpacing: false,
        // markers: true,
      });
    });
  }

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);


    return (
        <>
            <section className='ecomBnr'>
                <div className='container'>
                    <div className='ecomBnrHeader'>
                        {/* <div> */}
                        <h2>Ecommerce</h2>
                        {/* </div> */}
                        {/* <div>
                            <ul>
                                <li>
                                    <Link href="#">Features</Link>
                                </li>
                                <li>
                                    <Link href="#">Resources</Link>
                                </li>
                            </ul>
                        </div>
                        <div></div> */}
                    </div>
                    <div className='ecombnrWhiteFrame'>
                        <h1>Digitize Your Business, <span>Regardless</span> Of <span>Your Industry</span>.</h1>

                        <div className='displayInlineFlex alignItem_center gap24'>
                            <div><button className='mainbutton brightNavyBluebtn btnBoxShadow'>Get Started Now</button></div>
                            <div><button className='mainbutton brightNavyBlueOutlinebtn btnBoxShadow'>Schedule a Demo</button></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='onlineStoreBizzilo_sec'>
                <div className='container'>
                    <h2 className='fontSize36 ruinedSmoresText_clr fontWeight600 textalign_center mb_80'>Build an online store with Bizzilo</h2>

                    <div className='onlineStoreBizzilo_item'>
                        <div className='row alignItem_center'>
                            <div className='col-lg-6'>
                                <div className='onlineStore_img'>
                                    <img src="/assets/images/fullBrand_cgustomizion.png" alt='Full Brand Cgustomizion' />
                                </div>
                            </div>
                            <div className='col-lg-5 offset-lg-1'>
                                <div className='onlineStore_Content'>
                                    <h3>Full Brand Cgustomizion</h3>
                                    <p>Pick from an array of customizable ecommerce store themes for your online store and attract your kind of customers.</p>

                                    <Link href="#" className='brightNavyBlueText_btn'><span>More Details</span>  <img src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='onlineStoreBizzilo_item'>

                        <div className='row alignItem_center'>
                            <div className='col-lg-6'>
                                <div className='onlineStore_img'>
                                    <img src="/assets/images/createEcom.png" alt='Full Brand Cgustomizion' />
                                </div>
                            </div>
                            <div className='col-lg-5 offset-lg-1 '>
                                <div className='onlineStore_Content'>
                                    <h3>Create Ecom with Drag & Drop </h3>
                                    <p>Save time and costs on coding and confidently run your store on zero code. Pick a domain, list your products, and start selling - it is as easy as it sounds.</p>

                                    <Link href="#" className='brightNavyBlueText_btn'><span>More Details</span>  <img src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='coreFeatures_sec'>
                <div className='container'>
                    <h2 className='fontSize36 whiteText_Clr fontWeight600  mb_20'>Core Features</h2>
                    <p className='fontSize16 ancestralWatertext_clr fontWeight400 mb_80'>Intuitive, Streamlined interface for effortless navigation and seamless interactionIntuitive,<br className='brHideOnMobile' /> Streamlined interface for effortless navigation and seamless interaction</p>

                    <div className='coreFeaturesGrid'>
                        <div className='coreFeatures_item'>
                            <h5>Meticulous Product Catalog Management</h5>
                            <p>Seamlessly manage categories, collections, individual product entries and bulk csv upload simplifying data input.</p>
                            <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span>  <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>
                        </div>
                        <div className='coreFeatures_item'>
                            <h5>Proactive CRM</h5>
                            <p>Gain comprehensive views of products, sales, customers, and purchases for informed decisions.</p>
                            <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span>  <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>
                        </div>

                        <div className='coreFeatures_item'>
                            <h5>Strategic Shipping Options</h5>
                            <p>Connect with top 3PL partners and manage deliveries from order to doorstep with ease. Unlock the best shipping rates and expand reach—all from a single platform.</p>
                            <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span>  <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>
                        </div>

                        <div className='coreFeatures_item'>
                            <h5>Omnichannel</h5>
                            <p>Protect sensitive business data with robust authentication, role-based access, and permission controls. Prevent unauthorized access and ensure data integrity across your organization.</p>
                            <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span>  <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>
                        </div>
                        <div className='coreFeatures_item'>
                            <h5>Robust user access control</h5>
                            <p>Robust protection ensuring data integrity and confidentiality for utmost safety.</p>
                            <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span>  <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>
                        </div>
                        <div></div>


                    </div>

                </div>
            </section>

            <section className='advanceFeatures_sec'>
                <div className='container'>
                    <h2 className='fontSize36 ruinedSmoresText_clr fontWeight600 mb_70'>Advance Features</h2>



                    <div className='advanceFeatures_item mb_24'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='advanceFeatures_img'>
                                    <img src="/assets/images/adveCom_marketing.png" alt='Advanced eCommerce marketing' />
                                </div>
                            </div>
                            <div className='col-lg-7 offset-lg-1'>
                                <h3>Advanced eCommerce marketing</h3>



                                <ul className='emptyList'>
                                    <li className='displayInlineFlex gap12 mb_40'>
                                        <div>
                                            <img src="/assets/images/starpoint.svg" alt='Funnel' />
                                        </div>
                                        <div>
                                            <h5>Funnel</h5>
                                            <p>Drive top-of-funnel traffic to convert like a charm </p>
                                        </div>
                                    </li>
                                    <li className='displayInlineFlex gap12 mb_40'>
                                        <div>
                                            <img src="/assets/images/starpoint.svg" alt='Funnel' />
                                        </div>
                                        <div>
                                            <h5>Scale your business</h5>
                                            <p>Effectively scale your business and accomplish your goals with our-well- thought-out eCommerce marketing features.</p>
                                        </div>
                                    </li>
                                </ul>

                                <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span>  <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>



                            </div>
                        </div>
                    </div>

                    <div className='advanceFeatures_item mb_24'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='advanceFeatures_img'>
                                    <img src="/assets/images/Recommendati_engine.png" alt='Bizzilo Recommendation engine' />
                                </div>
                            </div>
                            <div className='col-lg-7 offset-lg-1'>
                                <h3>Bizzilo Recommendation engine</h3>
                                <ul className='emptyList'>
                                    <li className='displayInlineFlex gap12 mb_40'>
                                        <div>
                                            <img src="/assets/images/starpoint.svg" alt='Funnel' />
                                        </div>
                                        <div>
                                            <h5>Increased Engagement</h5>
                                            <p>Recommending related or complementary products keeps customers engaged, leading to longer sessions and higher retention rates</p>
                                        </div>
                                    </li>
                                    <li className='displayInlineFlex gap12 mb_40'>
                                        <div>
                                            <img src="/assets/images/starpoint.svg" alt='Funnel' />
                                        </div>
                                        <div>
                                            <h5>Upselling and Cross-selling</h5>
                                            <p>Elevate customer experiences by analyzing data, providing tailored suggestions, and increasing average cart value through personalized recommendations</p>
                                        </div>
                                    </li>
                                </ul>

                                <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span>  <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>



                            </div>
                        </div>
                    </div>

                    <div className='advanceFeatures_item'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='advanceFeatures_img'>
                                    <img src="/assets/images/abandoned_checkouts.png" alt='No more abandoned checkouts' />
                                </div>
                            </div>
                            <div className='col-lg-7 offset-lg-1'>
                                <h3>No more abandoned checkouts</h3>



                                <ul className='emptyList'>
                                    <li className='displayInlineFlex gap12 mb_40'>
                                        <div>
                                            <img src="/assets/images/starpoint.svg" alt='Funnel' />
                                        </div>
                                        <div>
                                            <h5>Recovery of Lost Sales</h5>
                                            <p>Reaching out to customers who abandoned their carts provides an opportunity to recover potentially lost sales by reminding them about their pending purchase.</p>
                                        </div>
                                    </li>
                                    <li className='displayInlineFlex gap12 mb_40'>
                                        <div>
                                            <img src="/assets/images/starpoint.svg" alt='Funnel' />
                                        </div>
                                        <div>
                                            <h5>Insights for Optimization</h5>
                                            <p>Analyzing reasons for cart abandonment can provide insights into website issues or customer concerns, enabling optimization for a smoother checkout process</p>
                                        </div>
                                    </li>
                                </ul>

                                <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span>  <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>



                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='amusingCoupons_sec'>
                <div className='container'>
                    <div className='row justifyContent_center mb_80'>
                        <div className='col-lg-6'>
                            <h2 className='fontSize36 ruinedSmoresText_clr textalign_center fontWeight600  mb_20'>Amusing coupons & gift cards</h2>
                            <p className='fontSize16 midnightSkyText_clr textalign_center fontWeight400'>Want to drive boost sales? Throw customized discounts based on products, categories, collections, or shipping zones in a click. Effortlessly set up your coupon’s validity, usage, value, and more with our coupon settings.</p>
                        </div>

                    </div>



                    <div className='row justifyContent_center alignItem_center'>
                        <div className='col-lg-4'>

                            <div className='amusingcouponsItem mobspaceMb_24'>

                                <div className='amusingcoupons_img'>
                                    <img src="/assets/images/engagement.png" alt='Customer Engagement' />
                                </div>

                                <h5>Customer Engagement</h5>
                                <p>Coupons and gift cards engage customers, incentivising purchases and fostering loyalty through discounts and special offers a charm </p>
                                <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span>  <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>

                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <div className='centerBorderLine'>
                                <img src="/assets/images/centerborderLine.svg" alt='centerborderLine' />
                            </div>
                        </div>
                        <div className='col-lg-4'>

                            <div className='amusingcouponsItem'>

                                <div className='amusingcoupons_img'>
                                    <img src="/assets/images/customerAcquisition.png" alt='Customer Acquisition and Retention' />
                                </div>

                                <h5>Customer Acquisition and Retention</h5>
                                <p>They aid in both acquiring new customers, who might be attracted by discounts, and retaining existing ones through rewards and incentives</p>
                                <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span>  <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='performanceInsights_sec'>
                <div className='container'>
                    <div className='row gap40 justifyContent_center'>
                        <div className='col-md-4'>

                            <div className='performanceInsights_item'>
                                <div className='performanceInsights_img'>
                                    <img src="/assets/images/detailedAnalytics.svg" alt='Detailed Analytics' />
                                </div>
                                <h5>Detailed Analytics</h5>
                                <p>Funnel analytics to understand user behavior, dynamic heatmaps to gather insights on visitor interaction, A/B tests to improve conversion, and more, to slice and dice every piece for information available for best results.</p>
                                <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span>  <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>


                            </div>
                        </div>
                        <div className='col-md-4'>

                            <div className='performanceInsights_item'>
                                <div className='performanceInsights_img'>
                                    <img src="/assets/images/comprehensiveReporting.svg" alt='Comprehensive Reporting' />

                                </div>
                                <h5>Comprehensive Reporting</h5>
                                <p>Up-to-date statistics at your fingertips. Enjoy access to a bevy of eCommerce reports with the power and depth you need for the effective management of your online store</p>
                                <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span>  <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>


                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='shipping_sec'>
                <div className='container'>
                    <h2>Shipping</h2>
                    <p className='fontSize16 nightSkyText_clr fontWeight400 mb_80'>Improve your eCommerce shipping experience by controlling <br className='brHideOnMobile' /> shipping zones and assigning delivery zones for each product.</p>


                    <div className='row mb_16'>
                        <div className='col-lg-6 mobspace_mb_16'>
                            <div className='shippingItem firststrowEqualHeight'>
                                <h5>Customized Shipping</h5>
                                <p>Businesses can set specific shipping rules or methods for each zone, optimizing costs and delivery options tailored to different regions</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='shippingItem firststrowEqualHeight'>
                                <h5>Delivery Time</h5>
                                <p>Zones can also impact delivery times, with closer zones generally having shorter delivery times compared to
                                    farther ones</p>
                            </div>
                        </div>
                    </div>



                    <div className='shippingItem mb_16'>

                        <div className='row'>
                            <div className='col-lg-7 mobspaceMb_24'>
                                <h5>Shipping Zone</h5>
                                <p>Businesses can set specific shipping rules or methods for each zone, optimizing costs and delivery options tailored to different regions</p>
                            </div>
                            <div className='col-lg-5'>

                                <img src="/assets/images/shippingZone.png" alt='Shipping Zone' />
                            </div>
                        </div>

                    </div>



                    <div className='shippingItem mb_16'>
                        <div className='row'>
                            <div className='col-lg-7 mobspaceMb_24'>
                                <h5>Shipping calculator</h5>
                                <p>Different shipping zones may have varying shipping rates or methods based on their distance from the shipping origin</p>
                            </div>
                            <div className='col-lg-5'>
                                <img src="/assets/images/Shipping calculator.png" alt='Shipping calculator' />
                            </div>
                        </div>
                    </div>



                    <div className='row'>
                        <div className='col-lg-6 mobspace_mb_16'>
                            <div className='shippingItem lastrowEqualHeight'>
                                <h5>Last Mile Delivery</h5>
                                <p className='mb_24'>Businesses can set specific shipping rules or methods for each zone, optimizing costs and delivery options tailored to different regions</p>

                                <img src="/assets/images/lastMile_delivery.png" alt='Last Mile Delivery' />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='shippingItem lastrowEqualHeight'>
                                <h5>Hyperlocal Delivery</h5>
                                <p className='mb_24'>Businesses can set specific shipping rules or methods for each zone, optimizing costs and delivery options tailored to different regions</p>

                                <img src="/assets/images/hyperlocalDelivery.png" alt='Hyperlocal Delivery' />

                            </div>
                        </div>
                    </div>











                </div>
            </section>

            <section className='coveringIndustries_sec'>
                <div className='container'>
                    <h2 className='fontSize36 ruinedSmoresText_clr textalign_center fontWeight600  mb_20'>Covering 20+ Industries</h2>


                    <div className='textalign_center'>
                        <Tabs
                            defaultActiveKey="retail"
                            id="uncontrolled-tab-example"
                            className="coveringIndustriesTabs"
                        >
                            <Tab eventKey="retail" title="Retail">


                                <div className='retailFrame'>


                                    <div className='scroll-container'>
                                        <div className='scroll-content'>
                                            <div>
                                                <img src="/assets/images/retailScroll_one.png" alt='retailScroll_one' />
                                                {/* <img src="/assets/images/retailScroll_one.png" alt='retailScroll_one' /> */}
                                            </div>
                                            <div>
                                                <img src="/assets/images/retailScroll_two.png" alt='retailScroll_two' />
                                                {/* <img src="/assets/images/retailScroll_two.png" alt='retailScroll_two' /> */}
                                            </div>
                                            <div>
                                                <img src="/assets/images/retailScroll_three.png" alt='retailScroll_three' />
                                                {/* <img src="/assets/images/retailScroll_three.png" alt='retailScroll_three' /> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>



                            </Tab>
                            <Tab eventKey="foodBeverage" title="Food & Beverage">
                                Two
                            </Tab>

                            <Tab eventKey="healthWellness" title="Health & Wellness">
                                Two
                            </Tab>

                            <Tab eventKey="electronics" title="Electronics">
                                Two
                            </Tab>

                            <Tab eventKey="artsCrafts" title="Arts & Crafts">
                                Two
                            </Tab>

                            <Tab eventKey="toysGames" title="Toys & Games">
                                Two
                            </Tab>
                            <Tab eventKey="petProducts" title="Pet Products">
                                Two
                            </Tab>
                            <Tab eventKey="digitalProducts" title="Digital Products">
                                Two
                            </Tab>
                            <Tab eventKey="jewelryAccessories" title="jewelryAccessories">
                                Two
                            </Tab>

                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page

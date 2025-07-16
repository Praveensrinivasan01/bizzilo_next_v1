"use client";
import Image from "next/image";
import React from 'react'








// import Flipkart from "../../assets/images/flipkart.png";
// import Amazon from "../../assets/images/amazon.png";
// import Whatsapp from "../../assets/images/whatsapp.png";
// import Mainlogo from "../../assets/images/main_logo.png";
// import Poslogo from "../../assets/images/pos_logo.png";
// import Ecom from "../../assets/images/ecom.png";



import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BlogSlider from "../../components/BlogSlider";

export default function Home() {

  return (
    <>

      <section className='hero_bnr'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='hero_content mobspaceMb_34'>
                <h1 >E-Commerce & Mini ERP</h1>
                <h2>Unified in one Platform</h2>

                <div className='displayFlex alignItem_center gap30'>
                  <div><button className='mainbutton ruinedSmoresbtn btnBoxShadow'>Get Started Now</button></div>
                  <div><button className='mainbutton whitebtn btnBoxShadow'>Schedule a Demo</button></div>
                </div>
              </div>

            </div>
            <div className='col-lg-8'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='businessOperationItem mobspaceMb_24'>
                    <div className='bizOp_header'>
                      <img src="/assets/images/inventoryManagement.png" alt='InventoryManagement' />
                    </div>
                    <div className='bizOp_footer'>
                      <h5>Inventory</h5>

                      <button className='explorebtn'>
                        <span>Explore</span>
                        <img src="/assets/images/linkArrow_icon.svg" alt='LinkarrowIcon' />
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='businessOperationItem'>
                    <div className='bizOp_header'>
                      <img src="/assets/images/eCommerce.png" alt='E-commerce' />
                    </div>
                    <div className='bizOp_footer'>
                      <h5>E-commerce</h5>

                      <button className='explorebtn'>
                        <span>Explore</span>
                        <img src="/assets/images/linkArrow_icon.svg" alt='LinkarrowIcon' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/*
              <div className='businessOperationItem'>
                <div className='bizOp_header'>
                  <img src=/assets/images/pos.png alt='Pos' />
                </div>
                <div className='bizOp_footer'>
                  <h5>POS</h5>

                  <button className='explorebtn'>
                    <span>Explore</span>
                    <img src="/assets/images/linkArrow_icon.svg" alt='LinkarrowIcon' />
                  </button>
                </div>
                </div> */}

            </div>
          </div>
        </div>
      </section>
      <section className='clientLogo'>
        <div className='textalign_center'>
          <img src="/assets/images/clientLogo_collection.png" alt='ClientLogos' />
        </div>
      </section>
      <section className='modulesOverview_sec'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='mobspaceMb_34'>
                <h2 className='fontSize36 fontWeight600 sootytext_clr mb_24'>Modules Overview</h2>
                <p className='fontSize18 fontWeight400 caviarText_clr'>Transform every transaction into an opportunity with our intelligence layer that drives engagement, loyalty, and revenue.</p>
              </div>
            </div>
            <div className='col-lg-7'>

              <div className='modulesOverview_detail'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='modulesOverview_item mb_40'>
                      <div className='modulesOverview_imgFrame'>
                        <img src="/assets/images/productCatalogue_Management.png" alt='Product Catalogue Management' />
                      </div>

                      <h5>Product Catalogue Management</h5>
                      <p>Simplify catalog management with Bizzilo – from SKUs, combos, and variants to categories and custom collections.</p>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='modulesOverview_item mb_40'>
                      <div className='modulesOverview_imgFrame'>
                        <img src="/assets/images/warehouseInventory.png" alt='Warehouse and Inventory' />
                      </div>

                      <h5>Warehouse and Inventory</h5>
                      <p>Track, manage, and optimize inventory across warehouses with Bizzilo – real-time stock updates, low-stock alerts, and smart transfers made simple</p>
                    </div>
                  </div>

                  <div className='col-lg-6'>
                    <div className='modulesOverview_item mobspaceMb_24'>
                      <div className='modulesOverview_imgFrame'>
                        <img src="/assets/images/procurementSales.png" alt='Procurement & Sales' />
                      </div>

                      <h5>Procurement & Sales</h5>
                      <p>Streamline procurement and boost sales with Bizzilo — manage customers, vendors, purchase  and sales channels in one powerful platform.</p>
                    </div>
                  </div>

                  <div className='col-lg-6'>
                    <div className='modulesOverview_item'>
                      <div className='modulesOverview_imgFrame'>
                        <img src="/assets/images/accounting.png" alt='Accounting' />
                      </div>

                      <h5>Accounting</h5>
                      <p>Simplify accounting with Bizzilo — track invoices, payments, taxes, and reports with real-time financial clarity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='yourCoreBenefits_sec'>
        <div className='container'>
          <div className="sectionheader">
            <h2 className='textalign_center'>Your Core <span>Benefits</span></h2>
          </div>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='coreBenefits_item mobspaceMb_24'>
                <div className='coreBenefits_img'>
                  <img src="/assets/images/fastOptimized.svg" alt='Fast and Optimized' />
                </div>
                <div>
                  <h5>Fast and Optimized</h5>
                  <p>Efficiently optimized for lightning -fast operations, ensuring unparalleled speed.</p>
                </div>
              </div>

            </div>
            <div className='col-lg-3'>
              <div className='coreBenefits_item mobspaceMb_24'>
                <div className='coreBenefits_img'>
                  <img src="/assets/images/reliableSecure.svg" alt='Reliable and Secure' />
                </div>
                <div>
                  <h5>Reliable and Secure</h5>
                  <p>Robust security, ensuring unwavering reliability in every transaction and operation.</p>
                </div>
              </div>

            </div>
            <div className='col-lg-3'>
              <div className='coreBenefits_item mobspaceMb_24'>
                <div className='coreBenefits_img'>
                  <img src="/assets/images/cuttingEdgeTech.svg" alt='Cutting Edge Technology' />
                </div>
                <div>
                  <h5>Cutting Edge Technology</h5>
                  <p>Unleashing innovation with state-of-the-art technology for advancement.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='coreBenefits_item'>
                <div className='coreBenefits_img'>
                  <img src="./assets/images/simplifiedue.svg" alt='Simplified User Experience' />
                </div>
                <div>
                  <h5>Simplified User Experience</h5>
                  <p>Intuitive, Streamlined interface for
                    effortless navigation and seamless interaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='goOmnichannel_sec'>
        <div className='container height100per'>
          <div className='row alignItem_center height100per'>
            <div className='col-lg-6'>
              <div className='mobspaceMb_34'>
                <h2>Go Omnichannel</h2>
                <h3>Sell Anywhere</h3>
              </div>
            </div>
            <div className='col-lg-6 '>



              {/* <div className="carousel-container">
                <div className="central-icon">
                  <img src="/images/center-logo.png" alt="Center Logo" />
                </div>

                <svg className="arc" viewBox="0 0 300 500">
                  <path
                    d="M 20 20 Q 150 250, 20 480"
                    stroke="#ccc"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>

                <div className="steps">
                  {items.map((item, index) => (
                    <div className={`step step-${index}`} key={index}>
                      <img src={item.logo} alt={item.name} />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div> */}
              <div className='textalign_center'>

                <img src="/assets/images/goOmnichannel.png" alt="Goomnichannel" />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='bizziloCycle_sec'>
        <div className='container'>
          <div className="sectionheader">
            <h2 className='textalign_center'>Bizzilo<span> Cycle</span></h2>
          </div>

          <div className='textalign_center'>
            <Tabs
              defaultActiveKey="procurement"
              id="uncontrolled-tab-example"
              className="bizziloTab"
            >
              <Tab eventKey="procurement" title="Procurement">
                <div className='cycleStepperFrame'>
                  <div className='stepperwavebg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1044" height="599" viewBox="0 0 1044 599" fill="none">
                      <g filter="url(#filter0_i_262_483)">
                        <path d="M1033.9 279.229V459.905C1033.9 629.633 785.104 633.132 785.104 459.905V139.229C785.104 -6.86688 540.409 -24.2947 540.409 139.229V459.905C540.409 619.132 286.52 619.723 286.52 459.905C286.52 300.087 286.52 179.53 286.52 139.229C286.52 -20.8676 10 -44.8676 10 139.229C10 339.552 10 261.632 10 312.632" stroke="#F7F7F7" strokeWidth="20" strokeLinecap="round" />
                      </g>
                      <defs>
                        <filter id="filter0_i_262_483" x="0" y="0.000488281" width="1043.9" height="599.516" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="1" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_262_483" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className='cycleStepper'>
                    <div>
                      <div className='procurementItem'>
                        <div className='procurementImgframe'>
                          <img src="/assets/images/approvalWorkflow.png" alt='Approvalworkflow' />
                        </div>
                        <div>
                          <h5>Approval <br className='brHideOnMobile' /> Workflow</h5>
                        </div>
                      </div>
                      <div className='procurementItem'>
                        <div className='procurementImgframe'>
                          <img src="/assets/images/purchaseRequisition.png" alt='PurchaseRequisition' />
                        </div>
                        <div>
                          <h5>Purchase <br className='brHideOnMobile' /> Requisition</h5>
                        </div>
                      </div>



                    </div>
                    <div>

                      <div className='procurementItem'>
                        <div className='procurementImgframe'>
                          <img src="/assets/images/poCreate.png" alt='PoCreate' />
                        </div>
                        <div>
                          <h5>PO Create</h5>
                        </div>
                      </div>
                      <div className='procurementItem'>
                        <div className='procurementImgframe'>
                          <img src="/assets/images/vendorSelection.png" alt='Vendorselection' />
                        </div>
                        <div>
                          <h5>Vendor <br className='brHideOnMobile' /> Selection</h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='procurementItem'>
                        <div className='procurementImgframe'>
                          <img src="/assets/images/goodsReceivedNote.png" alt='GoodsReceivednote' />
                        </div>
                        <div>
                          <h5>Goods <br className='brHideOnMobile' /> Received Note</h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='procurementItem'>
                        <div className='procurementImgframe'>
                          <img src="/assets/images/paymentProcessing.png" alt='Paymentprocessing' />
                        </div>
                        <div>
                          <h5>Payment <br className='brHideOnMobile' /> Processing</h5>
                        </div>
                      </div>
                      <div className='procurementItem'>
                        <div className='procurementImgframe'>
                          <img src="/assets/images/invoiceMatching.png" alt='InvoiceMatching' />
                        </div>
                        <div>
                          <h5>Invoice <br className='brHideOnMobile' /> Matching</h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='procurementItem'>
                        <div className='procurementImgframe'>
                          <img src="/assets/images/accountingReporting.png" alt='AccountingReporting' />
                        </div>
                        <div>
                          <h5>Accounting &<br className='brHideOnMobile' /> Reporting</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="sales" title="Sales">
                Two
              </Tab>

            </Tabs>
          </div>

        </div>
      </section>
      <section className='integrations_sec'>
        <div className='container'>
          <h2>Integrations</h2>

          <div className='integrationsParent'>
            <div className='integrationsIconframe'>
              <img src="/assets/images/phonepe.png" alt='Phonepe' />
            </div>
            <div className='integrationsIconframe'>
              <img src="/assets/images/razorpay.png" alt='Razorpay' />
            </div>
            <div className='integrationsIconframe'>
              <img src="/assets/images/hotjar.png" alt='Hotjar' />
            </div>
            <div className='integrationsIconframe'>
              <img src="/assets/images/meta.png" alt='Meta' />
            </div>
            <div className='integrationsIconframe'>
              <img src="/assets/images/shiprocket.png" alt='Shiprocket' />
            </div>
          </div>
          <div className='integrationschild'>
            <div className='integrationsIconframe'>
              <img src="/assets/images/googleAnalytics.png" alt='GoogleAnalytics' />
            </div>
            <div className='integrationsIconframe'>
              <img src="/assets/images/googleTagmanager.png" alt='GoogleTagmanager' />
            </div>

            <div className='integrationsIconframe'>
              <img src="/assets/images/mail.png" alt='Mail' />
            </div>
            <div className='integrationsIconframe'>
              <img src="/assets/images/message.png" alt='Message' />
            </div>
            <div className='integrationsIconframe'>
              <img src="/assets/images/shiprocket.png" alt='Shiprocket' />
            </div>
          </div>
        </div>
      </section>

      <section className='marketingTools_sec'>
        <div className='container'>
          <div className="sectionheader">
            <h2 className='textalign_center'>Marketing Tools</h2>
          </div>

          <div className="marketingToolsGrid">

            <div className="marketingToolsItem">

              <h5>Advertisements</h5>
              <p>Run high-converting Google & Meta ads with Bizzilo — auto-sync your catalog and track performance in real time.</p>

              <div className='marketingToolsImgbg'>
                <img src="/assets/images/advertisements.png" alt='Advertisements' />
              </div>
            </div>
            <div className="marketingToolsItem">
              <h5>Campaigns</h5>
              <p>Convert every shopper into a buyer with smart notifications and targeted campaigns that drive them to complete checkout.</p>

              <div className='marketingToolsImgbg'>
                <img src="/assets/images/campaigns.png" alt='Campaigns' />
              </div>

            </div>
            <div className="marketingToolsItem">
              <h5>Content Management</h5>
              <p>Share insights, stories, and success with built-in blogs and case studies — boost SEO and build customer trust with Bizzilo.</p>

              <div className='marketingToolsImgbg'>
                <img src="/assets/images/contentManagement.png" alt='contentManagement' />
              </div>
            </div>
            <div className="marketingToolsItem">

              <h5>WhatsApp Automations</h5>
              <p>Automate reminders, workflows, and customer journeys with Bizzilo — from abandoned cart nudges to post-purchase follow-ups.</p>

              <div className='marketingToolsImgbg'>
                <img src="/assets/images/whatsAppAutomations.png" alt='Whatsapp Automations' />
              </div>
            </div>
            <div className="marketingToolsItem">


              <h5>Search Engine Optimisation</h5>
              <p>Boost your store’s visibility with built-in SEO tools — optimize pages, products, and blogs to rank higher and reach more customers.</p>

              <div className='marketingToolsImgbg'>
                <img src="/assets/images/seo.png" alt='Search Engine Optimisation' />
              </div>
            </div>
            <div className="marketingToolsItem"></div>
          </div>




        </div>
      </section>
      <section className='yourAIPowerhouse_sec'>
        <div className='container-fluid'>

          <div className='yourAIPowerhouse_header'>
            <h2 className='textalign_center'>Your AI Powerhouse - Sell, Serve & Scale</h2>
            <p>From real-time chat commerce to frictionless operations, Bizzilo’s AI suite <br className='brHideOnMobile' /> supercharge every step of your customer journey</p>
          </div>
          <div className='yourAIPowerhouseGrid'>
            <div className='yourAIPowerhouseitem'>
              <button>Chat & Voice Commerce</button>
              <h3>Talk. Tap.Transact</h3>

              <div className='yourAIPowerhouseHover'>
                <img src="/assets/images/hovergradiant.png" alt='Hovergradiant' />
              </div>
            </div>
            <div className='yourAIPowerhouseitem'>
              <button>Dynamic Pricing Engine</button>
              <h3>Maximize Margins in Real Time</h3>
              <p>AI analyzes demand, competitor prices & inventory to suggest optimal prices—always stay competitive.</p>

            </div>
            <div className='yourAIPowerhouseitem'>
              <button>Hyper-Personalized</button>
              <h3>Your Best Seller Is Just One Click Away</h3>
              <p>Location-, behavior- and season-based product picks that turn browsers into buyers.</p>
            </div>
            <div className='yourAIPowerhouseitem'>
              <button>Hyper-Personalized</button>
              <h3>Demand Forecasting</h3>
            </div>
            <div className='yourAIPowerhouseitem'>
              <button>Sentiment IQ</button>
              <h3>Happy Customers, Always</h3>
              <p>Multilingual, emotion-aware chat support that deflects ticket volume by </p>

              <h4>up to </h4>
              <h2>70%</h2>
            </div>
            <div className='yourAIPowerhouseitem'>
              <button>Content Generator</button>
              <h3>Descriptions That Sell Themselves</h3>
            </div>
            <div className='yourAIPowerhouseitem'>
              <button>Smart Fraud & Anomaly Alert</button>
              <h3>Sleep Easy, We’ve Got You Covered</h3>
              <p>Real-time fraud detection on payments, returns, and unusual order patterns.</p>
            </div>
            <div className='yourAIPowerhouseitem'>
              <button>Conversational BI & Insights</button>
              <h3>Ask, Don’t Search Which SKUs are trending this week?</h3>
              <p>Get visual answers in charts or human-friendly bullets</p>
            </div>
            <div className='yourAIPowerhouseitem'>
              <button>AI Video & GIF Maker</button>
              <h3>Bring Your Products to Life</h3>
              <p>Auto-generate short demo videos or product GIFs for social & ads-no video team needed.</p>
            </div>
            <div className='yourAIPowerhouseitem'>
              <button>Voice-Activated Dashboard</button>
              <h3>Data at the Speed of Sound</h3>
            </div>
          </div >








        </div>
      </section >

      <section className='testimonials_sec'>
        <div className="sectionheader">
          <h2 className='textalign_center'>Testimonials</h2>
        </div>
        <div className='testimonialsmapframe'>
          <div className='container height100per'>
            <div className='threeRowMap'>
              <div className='topRow'>
                <div>
                  <div className='profiledp videoReview'>
                    <img src="/assets/images/sathish.png" alt='sathish' />
                  </div>
                </div>

                <div>
                  <div className='profiledp'>
                    <img src="/assets/images/pavi.png" alt='Pavidp' />

                    <div className="custom_tooltiptext">
                      <h4>Ananth</h4>
                      <h5>DIRECTOR</h5>
                      <p>“Implementing this ERP app was a game changer it optimized work -flow, enhanced collaboration and provided invaluable insights for our business expansion impressive tool.</p>
                    </div>

                  </div>
                </div>

                <div>
                  <div className='userIconProfile'>
                    <img src="/assets/images/dp_icon.png" alt='DpIcon' />
                  </div>
                </div>


                <div>
                  <div className='profiledp'>
                    <img src="/assets/images/praveen.png" alt='Praveendp' />
                    <div className="custom_tooltiptext">
                      <h4>Ananth</h4>
                      <h5>DIRECTOR</h5>
                      <p>“Implementing this ERP app was a game changer it optimized work -flow, enhanced collaboration and provided invaluable insights for our business expansion impressive tool.</p>
                    </div>
                  </div>
                </div>


                <div>
                  <div className='emptyDp'></div>
                </div>
                <div>
                  <div className='emptyDp'></div>
                </div>
              </div>

              <div className='centerRow'>
                <div>
                  <h3>Join us to begin <br className='brHideOnMobile' /> your journey</h3>
                </div>
              </div>


              <div className='bottomRow'>


                <div>
                  <div className='emptyDp'></div>
                </div>
                <div>
                  <div>
                    <div className='profiledp'>
                      <img src="/assets/images/saravana.png" alt='Saravanadp' />

                      <div className="custom_tooltiptext">
                        <h4>Ananth</h4>
                        <h5>DIRECTOR</h5>
                        <p>“Implementing this ERP app was a game changer it optimized work -flow, enhanced collaboration and provided invaluable insights for our business expansion impressive tool.</p>
                      </div>


                    </div>
                  </div>
                  <div>
                    <div className='profiledp'>
                      <img src="/assets/images/hema.png" alt='Hemadp' />

                      <div className="custom_tooltiptext custom_tooltiptextRight">
                        <h4>Ananth</h4>
                        <h5>DIRECTOR</h5>
                        <p>“Implementing this ERP app was a game changer it optimized work -flow, enhanced collaboration and provided invaluable insights for our business expansion impressive tool.</p>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className="sectionheader">
            <h2 className='textalign_center'>Resources</h2>
          </div>


          <div className='textalign_center'>
            <Tabs
              defaultActiveKey="blog"
              id="uncontrolled-tab-example"
              className="bizziloTab"
            >
              <Tab eventKey="blog" title="Blog">


<BlogSlider/>

     
              </Tab>
              <Tab eventKey="caseStudy" title="Case Study">
                Case Study
              </Tab>

            </Tabs>
          </div>


        </div>
      </section>
      <section className='startYourfreetrial_sec'>
        <div className='container'>
          <div className='startYourfreetrialFrame'>
            <h2>Start your free trial for 30 days</h2>
            <h4>Take your business online with bizzilo, <br className='brHideOnMobile' />  start your free trial now</h4>
            <button className='bigSizeWhitebtn'>Get Started</button>
          </div>
        </div>
      </section>

    </>
  );
}

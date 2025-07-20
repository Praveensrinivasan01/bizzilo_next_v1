import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BlogSlider = () => {

    const NextArrow = ({ onClick }) => (
        <div className="custom-arrow next" onClick={onClick}>
            ▶
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="custom-arrow prev" onClick={onClick}>
            ◀
        </div>
    );

    const blogSlider = {
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
    <div >
          <Slider {...blogSlider} className='blogSlider'>

              <div className='blogitem'>
                  <div className='blogImg'>
                      <img src="/assets/images/aiFor_lastmile.png" alt='AiForlastmile' />
                  </div>
                  <div className='blogContent'>
                      <h5>Ecom</h5>
                      <h2>Cultural Shifts: The Impact of Modern Art</h2>
                      <p>October 10, 2023 - 4 Mins Read</p>
                  </div>
              </div>
              <div className='blogitem'>
                  <div className='blogImg'>
                      <img src="/assets/images/small_business.png" alt='Smallbusiness' />
                  </div>
                  <div className='blogContent'>
                      <h5>Ecom</h5>
                      <h2>Cultural Shifts: The Impact of Modern Art</h2>
                      <p>October 10, 2023 - 4 Mins Read</p>
                  </div>
              </div>
              <div className='blogitem'>
                  <div className='blogImg'>
                      <img src="/assets/images/digital_newlife.png" alt='Digitalnewlife' />
                  </div>
                  <div className='blogContent'>
                      <h5>Ecom</h5>
                      <h2>Cultural Shifts: The Impact of Modern Art</h2>
                      <p>October 10, 2023 - 4 Mins Read</p>
                  </div>
              </div>
          </Slider>
    </div>
  )
}

export default BlogSlider

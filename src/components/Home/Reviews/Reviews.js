import React, { useEffect, useState } from 'react';
import './Reviews.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import Review from '../Review/Review';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import { Col, Spinner } from 'react-bootstrap';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
    ,
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    }
]


const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    SwiperCore.use([Pagination, Autoplay]);
    // const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch("https://shrouded-thicket-71402.herokuapp.com/reviews")
          .then((res) => res.json())
          .then((data) => setReviews(data));
      }, []);

    return (
        <section className="testimonials my-5 py-5 bg-light bg-gradient">
           <div className="container text-center">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">User Reviews</h5>
                   <h1>What Our Patients <br/> Says </h1><hr/>
               </div>
               {/* <div className="w-80 row mt-3 pt-5 text-center d-flex justify-content-center">
                    {reviews.length === 0 && (     
                        <div style={{textAlign: 'center'}} class="spinner-border text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    )}

                    {
                        reviews.map(review => <Review review={review} key={review.name}/>)
                    }
                </div> */}
                <Col md={11} className="mx-auto">
                <Swiper 
                    pagination={{ clickable: true }}
                    slidesPerView={3}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 3,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={10}
                    >
                    
                    {
                        reviews.length === 0 ? 
                            <div className="text-center">
                                <Spinner animation="border" variant="success" />
                            </div>: 
                            reviews.map(review => {
                                return(
                                    <SwiperSlide>
                                           {/* reviews.map(review => <Review review={review} key={review.name}/>) */}
                                        <Review review={review}  key={review.name}/>
                                    </SwiperSlide>
                                )
                        })
                    //     testimonialData.map(review => {
                    //         return(
                    //             <SwiperSlide>
                    //                    {/* reviews.map(review => <Review review={review} key={review.name}/>) */}
                    //                 <Review review={review}  key={review.name}/>
                    //             </SwiperSlide>
                    //         )
                    // })
                    }
                </Swiper>
                </Col>
           </div>
       </section>
    );
};

export default Reviews;
import React, { useEffect, useState } from 'react';
import './Reviews.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import Review from '../Review/Review';

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
]


const Reviews = () => {
    const [reviews,setReviews] = useState([]);

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
               <div className="w-80 row mt-3 pt-5 text-center d-flex justify-content-center">
                    {reviews.length === 0 && (     
                        <div style={{textAlign: 'center'}} class="spinner-border text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    )}

                    {
                        reviews.map(review => <Review review={review} key={review.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Reviews;
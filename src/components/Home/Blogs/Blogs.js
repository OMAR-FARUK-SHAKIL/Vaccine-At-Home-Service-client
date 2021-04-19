import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import kashem from '../../../images/kashem.png';
import roky from '../../../images/roky.png';
import sarah from '../../../images/sarah.jpg';
import './Blogs.css'


const blogData = [
    {
        title : 'COVID-19 vaccines: Safety, side effects — and coincidence',
        description : 'Historically, both drugs and vaccines have been used sparingly in pregnancy. Avoidance of vaccines has been largely based on theoretical concerns about teratogenicity of live vaccines such as rubella and varicella, which have not been borne out. A secondary consideration for avoiding vaccines has been that an anomaly will be misattributed to vaccine, especially if received in the first trimester.       ',
        author:'Abul Kashem',
        authorImg : kashem,
        date : '23 April 2019',
        blogLink:'https://www.health.harvard.edu/blog/covid-19-vaccines-safety-side-effects-and-coincidence-2021020821906'
    },
    {
        title : 'Routine Vaccines Provided for Babies and Children',
        description : 'Historically, both drugs and vaccines have been used sparingly in pregnancy. Avoidance of vaccines has been largely based on theoretical concerns about teratogenicity of live vaccines such as rubella and varicella, which have not been borne out. A secondary consideration for avoiding vaccines has been that an anomaly will be misattributed to vaccine, especially if received in the first trimester.  ',
        author:'Sarah Ali Khan',
        authorImg : sarah,
        date : '02 April 2021',
        blogLink:'https://coronavirus.medium.com/should-a-covid-19-vaccine-be-offered-in-pregnancy-doctors-say-yes-f78244d78a9'
    },
    {
        title : 'INFLUENZA VACCINE IN PREGNANCY: IS IT SAFE?',
        description : 'Historically, both drugs and vaccines have been used sparingly in pregnancy. Avoidance of vaccines has been largely based on theoretical concerns about teratogenicity of live vaccines such as rubella and varicella, which have not been borne out. A secondary consideration for avoiding vaccines has been that an anomaly will be misattributed to vaccine, especially if received in the first trimester.',
        author:'Dr.Roki Das',
        authorImg :roky ,
        date : '26 August 2020',
        blogLink:'https://bcmj.org/bccdc/influenza-vaccine-pregnancy-it-safe'
    },
]

const Blogs = () => {
    return (
       <section className="blogs my-5 bg-light p-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
               </div>
               <div className="row mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;
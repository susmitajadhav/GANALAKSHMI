import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ReviewSection.css";

const testimonials = [
  {
    name: "Saul Goodman",
    role: "CEO & Founder",
    review:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitor enim suscipit rhoncus.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sara Wilsson",
    role: "Designer",
    review:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum.",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Jena Karlis",
    role: "Store Owner",
    review:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam.",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Matt Brandon",
    role: "Freelancer",
    review:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat.",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "John Larson",
    role: "Entrepreneur",
    review:
      "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster.",
    img: "https://randomuser.me/api/portraits/men/60.jpg",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Default: 3 reviews for large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets & small laptops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Small tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 1, // ✅ Show only 1 review
          centerMode: false, // ✅ Disable centering
        },
      },
      {
        breakpoint: 320, // Very small screens
        settings: {
          slidesToShow: 1, // ✅ Show only 1 review
          centerMode: false, // ✅ Disable centering
        },
      },
    ],
  };
  

  return (
    <section className="testimonials">
      <h2 className="section-title">TESTIMONIALS</h2>
      <p className="section-subtitle">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint.
      </p>
      <div className="slider-container">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.img} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p className="role">{testimonial.role}</p>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="review">“{testimonial.review}”</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

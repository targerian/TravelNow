import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./NewCarousal.css";
import { AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const NewCarousal = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const placesData = [
    {
      index: 0,
      headline: "Travel to Mountains",
      rating: 5,
      src: "/images/mountains.jpg",
      country: "Brazil",
      price: 6000,
    },
    {
      index: 1,
      headline: "Travel to Desert",
      rating: 5,
      src: "/images/desert.jpg",
      country: "Alaska",
      price: 7000,
    },
    {
      index: 2,
      headline: "Campain in mountains",
      rating: 5,
      src: "/images/forest.jpg",
      country: "Greenland",
      price: 6000,
    },
    {
      index: 3,
      headline: "Focus On The Writing",
      rating: 5,
      src: "/images/desert.jpg",
      price: 6000,
      country: "Egypt",
    },
  ];

  return (
    <div className="carousal">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType == "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {placesData.map((place) => (
          <div className="card-container">
            <div className="card-image-container">
              <img src={place.src} alt={place.headline} />
              <div className="card-details">
                <div className="card-country">
                  <GoLocation
                    style={{ fontSize: "15px", marginRight: "5px" }}
                  />{" "}
                  <span>{place.country}</span>
                </div>
                <span className="card-headline">{place.headline}</span>
                <div className="card-rating">
                  {[...Array(place.rating)].map((r) => (
                    <AiFillStar style={{ color: "gold" }} />
                  ))}
                </div>
                <span className="card-price">${place.price}</span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewCarousal;

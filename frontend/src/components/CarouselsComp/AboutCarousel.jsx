import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import About1 from '../img/about-1.jpg'
import About2 from '../img/about-2.jpg'
import About3 from '../img/about-3.jpg'

const gradientStyle = {
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.338), rgba(0, 0, 0, 0.338))',
};

function AboutCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const carouselItems = [
    {
      imageSrc: About1,
      title: 'Our Mission',
      caption: 'Empowering communities through education and healthcare.'
    },
    {
      imageSrc: About2,
      title: 'Our Impact',
      caption: 'Transforming lives and creating lasting change.'
    },
    {
      imageSrc: About3,
      title: 'Get Involved',
      caption: 'Join us in making a difference in the world.'
    }
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselItems.map((item, idx) => (
        <Carousel.Item key={idx}>
          <div className="image-container" style={gradientStyle}>
            <img src={item.imageSrc} alt={item.title} className='img-fluid' />
          </div>
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default AboutCarousel;

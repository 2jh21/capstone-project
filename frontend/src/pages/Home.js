import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/MainSlider.css';
import '../styles/AnimalGrid.css';
import '../styles/wrap.css';

function Home() {
  const sliderImages = [
    '/images/slider1.png',
    '/images/slider2.png',
    '/images/slider3.png',
  ];

  const dogs = [
    { id: 1, img: '/images/dog1.jpg'},
    { id: 2, img: '/images/dog2.jpg'},
    { id: 3, img: '/images/dog3.jpg'},
    { id: 4, img: '/images/dog4.jpg'},
    { id: 5, img: '/images/dog5.jpg'},
  ];

  const cats = [
    { id: 1, img: '/images/cat1.jpg'},
    { id: 2, img: '/images/cat2.jpg'},
    { id: 3, img: '/images/cat3.jpg'},
    { id: 4, img: '/images/cat4.jpg'},
    { id: 5, img: '/images/cat5.jpg'},
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="home-container">
      <Header />
      <MenuBar />

      <div className="slider-container">
        <Slider {...sliderSettings}>
          {sliderImages.map((img, idx) => (
            <div key={idx} className="slide">
              <img src={img} alt={`slide-${idx}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="wrap">
        <div className="animal-grid">
          <h2 className="section-title">최근 등록된 보호견 {'>'}</h2>
          <div className="grid-container">
            {dogs.map((animal) => (
              <div className="animal-cards" key={animal.id}>
                <a href={animal.link}>
                  <img src={animal.img} alt="Animal" className="animal-img" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="animal-grid">
          <h2 className="section-title">최근 등록된 보호묘 {'>'}</h2>
          <div className="grid-container">
            {cats.map((animal) => (
              <div className="animal-cards" key={animal.id}>
                <a href={animal.link}>
                  <img src={animal.img} alt="Animal" className="animal-img" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

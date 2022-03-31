import { Carousel } from 'react-responsive-carousel'

const Hero = () => {
  return (
    <>
      <Carousel infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={3000}>
        <div>
          <img src="images/1.png" />
        </div>
        <div>
          <img src="images/2.png" />
        </div>
        <div>
          <img src="images/3.png" />
        </div>
        <div>
          <img src="images/4.png" />
        </div>
      </Carousel>
    </>
  )
}

export default Hero

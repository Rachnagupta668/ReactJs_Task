// import 'bootstrap/dist/css/bootstrap.min.css';
// VideoCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
// import 'bootstrap/dist/css/bootstrap.min.css';




const videos = [
    {
      url: '../images/dj.mp4',
      title: 'Video 1',
      description: 'This is the first video.',
    },
    {
      url: '../images/dj.mp4',
      title: 'Video 2',
      description: 'This is the second video.',
    },
    {
        url: '../images/dj.mp4',
        title: 'Video 3',
        description: 'This is the thired video.',
      },
    // Add more video objects as needed
  ];
const VideoCarousel = () => {
  return (



    <Carousel>
         
      {videos.map((video, index) => (
        <Carousel.Item key={index}>
          <ReactPlayer
            url={video.url}
            width="100%"
            height="300px"
            controls
          />
          <Carousel.Caption>
            <h3 className='text-primary'>{video.title}</h3>
            <p className='text-primary'>{video.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default VideoCarousel;

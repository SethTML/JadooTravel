import {useState, useEffect, useRef} from 'react';

function Testimonials() {
  const [transformPos,setTransformPos] = useState(0);
  const [currentSlide,setcurrentSlide] = useState(1);

  const sliderStyle = {
    transition: 'all 0.3s ease',
    transform: `TranslateY(${transformPos}px)`
  }

  const downPointerStyle = {
    cursor: currentSlide == 3 ? "not-allowed" : "pointer"
  }

  const upPointerStyle = {
    cursor: currentSlide == 1 ? "not-allowed" : "pointer"
  }

  function handleDoubleClick(event){
    event.preventDefault();
  };

  function downhandleKeyDown(event){
    if (event.key === 'Enter') {
      moveSlider("down");
    }
  };

  function uphandleKeyDown(event){
    if (event.key === 'Enter') {
      moveSlider("up");
    }
  };

  function moveSlider(direction){
    if (direction == "up" && currentSlide > 1) {
      setTransformPos(transformPos + 325);
      setcurrentSlide(currentSlide - 1);
    }
    else if (direction == "down" && currentSlide < 3) {
      setTransformPos(transformPos - 325);
      setcurrentSlide(currentSlide + 1);
    }
  }

  return (
    <div className = "Testimonials reveal">
      <div className = "TestimonialsContent">
        <div className = "TestimonialsInfo">
          <span className = "TestimonialsContentSubtitle">TESTIMONIALS</span>
          <span className = "TestimonialsContentTitle">What People Say About Us.</span>
          <div className = "IndicatorBox">
            <div className = "Indicator HighlightedIndicator"></div>
            <div className = "Indicator"></div>
            <div className = "Indicator"></div>
          </div>
        </div>
        <div className = "TestimonialsImages">
          <div className = 'TestimonialCardBox'>
            <div style = {sliderStyle} className = 'TestimonialCardBoxSlider'>
              <div className = 'TestimonialCard'>
                <div className = 'TestimonialCardContent'>
                  <span className = 'TestimonialCardDesc'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</span>
                  <span className = 'TestimonialCardAuthor'>Mike taylor</span>
                  <span className = 'TestimonialCardLocation'>Lahore, Pakistan</span>
                </div>
              </div>
              <div className = 'TestimonialCard'>
                <div className = 'TestimonialCardContent'>
                  <span className = 'TestimonialCardDesc'>"Beneath the moon's marshmallow melody, cosmic crickets hum a dance of starlight. Whispering galaxies share secrets with quantum quasars."</span>
                  <span className = 'TestimonialCardAuthor'>Chris Thomas</span>
                  <span className = 'TestimonialCardLocation'>CEO of Red Button</span>
                </div>
              </div>
              <div className = 'TestimonialCard'>
                <div className = 'TestimonialCardContent'>
                  <span className = 'TestimonialCardDesc'>"Amidst the pixelated haze, digital dandelions dance on the breeze of data streams. Virtual voyagers seek the elusive binary butterfly."</span>
                  <span className = 'TestimonialCardAuthor'>Alexander Bennett</span>
                  <span className = 'TestimonialCardLocation'>Chief Technology Officer</span>
                </div>
              </div>
            </div>
          </div>
          <div className = 'TestimonialButtons'>
            <svg onKeyDown={uphandleKeyDown} onSelect={handleDoubleClick} onDoubleClick={handleDoubleClick} style = {upPointerStyle} onClick = {() => {moveSlider("up")}} tabindex = "0" className = 'TestimonialUp' width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8.5L8 1.5L15 8.5" stroke = {currentSlide == 1 ? "#BCB7C2" : "#3E2E4D"} stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg onKeyDown={downhandleKeyDown} onDoubleClick={handleDoubleClick} style = {downPointerStyle} onClick = {() => {moveSlider("down")}} tabindex = "0" className = 'TestimonialDown' width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L8 8L15 1" stroke = {currentSlide == 3 ? "#BCB7C2" : "#3E2E4D"} stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

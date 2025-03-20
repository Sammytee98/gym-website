import { useEffect, useRef } from "react";
import testimonials from "./testimonialsData";

const Testimonials = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrameId;

    const animateSlider = () => {
      if (slider) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animateSlider);
    };
    animationFrameId = requestAnimationFrame(animateSlider);
    return () => cancelAnimationFrame(animateSlider);
  }, []);

  return (
    <div
      className="w-full md:w-4/6 h-96 overflow-hidden relative 
    bg-inherit py-10 my-10"
    >
      <h3 className="text-2xl text-center font-bold font-raleway ">
        Members Experiences at XtremeFit
      </h3>
      <div
        ref={sliderRef}
        className="w-full absolute flex space-x-6 animate-scroll mt-10"
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index + 1}
            className="bg-neutral-300 dark:bg-neutral-800 w-72 p-3 rounded-3xl shadow-lg shrink-0"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mx-auto"
            />
            <h3 className="text-xl font-bold font-raleway text-center mt-4">
              {testimonial.name}
            </h3>
            <p className=" text-base text-center font-montserrat mt-2">
              {testimonial.review}
            </p>
            <div className="flex justify-center mt-3 text-yellow-400">
              {"⭐".repeat(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

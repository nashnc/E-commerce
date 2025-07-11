import React, { useRef, useState } from "react";

import VerticalImageSlider from "../VerticalImageSlider/VerticalImageSlider";
import ImageZoomSlider from "../ImageZoomSlider/ImageZoomSlider";

const ProductZoom = () => {
     const [slideIndex, setSlideIndex] = useState(0);
     const ZoomSliderBig = useRef();
     const ZoomSliderSml = useRef();

     const goto = (index) => {
          setSlideIndex(index);
          ZoomSliderSml.current.swiper.slideTo(index);
          ZoomSliderBig.current.swiper.slideTo(index);
     };

     return (
          <>
               <div className="flex gap-3">
                    <div className="slider w-[15%]">
                         <VerticalImageSlider
                              selectedIndex={slideIndex}
                              goto={goto}
                              sliderRef={ZoomSliderSml}
                         />
                    </div>
                    <div className="zoomContainer h-[500px] w-[85%] overflow-hidden">
                         <ImageZoomSlider
                              selectedIndex={slideIndex}
                              sliderRef={ZoomSliderBig}
                         />
                    </div>
               </div>
          </>
     );
};

export default ProductZoom;

import React from 'react';
import { Popup } from 'react-magnific-popup';

const popupConfig = {
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
}

const videoComponent = () => {
  return (
    <div>
      <p>
        <Popup 
          className="popup-youtube" 
          href="http://www.youtube.com/watch?v=0O2aH4XLbto" 
          savefrom_lm_index="0" 
          savefrom_lm="1"
          config={popupConfig}>
            Open YouTube video
        </Popup>
      </p>
    </div>
  );  
}

export default videoComponent;
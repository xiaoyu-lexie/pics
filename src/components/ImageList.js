import React from 'react';
import ImageCard from './ImageCard';

import './ImageList.css';

const ImageList = (props) => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} /> //this part is NOT running when first render(not sure ,just guess), which means ImageCard component is not invoked before
                                                      //we type characters in search bar
  } )

  // console.log('ImageList is running', props) // this part is running when first render, which means ImageList component is used when the page first loaded up. So the question
                                                // is why ImageCard isn't rendered or used or invoked when the page first loaded up?

  return (
    <div className='image-list'>{images}</div>
  )
};

export default ImageList;
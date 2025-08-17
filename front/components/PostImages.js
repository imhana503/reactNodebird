import React, { useState, useCallback } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(()=>{

  }, []);

  if(images.length === 1){
    return(
      <>
        <img src={images[0].src} alt={images[0].src} onClick={onZoom}/>
      </>
    )
  } else if(images.length === 2){
    return(
      <>
        <img src={images[0].src} alt={images[0].src} onClick={onZoom}/>
        <img src={images[1].src} alt={images[1].src} onClick={onZoom}/>
      </>
    )
  }
  return(
    <>
      <div>
        <img role="presentation" width="50%" src={images[0].src} alt={images[0].src} onClick={onZoom}/>
        <div 
          role="presentation"
          style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
          onClick={onZoom}
        >
          <PlusOutlined/>
          <br/>
          {images.length -1}
          개의 사진 더보기

        </div>
      </div>
    </>
  )
}

export default PostImages;

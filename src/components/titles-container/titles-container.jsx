import React from 'react';
import {useParams} from 'react-router-dom';
import './titles-container.styles.scss';

const TitleContainer = ({title, imageUrl, size, history, linkUrl, match}) => (
  <div className= {`${size} titles-container`} >
    <div 
      className = 'background-image' 
      style = {{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='titles'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>Lets go!</span>
    </div>
  </div>
);


export default (TitleContainer); 
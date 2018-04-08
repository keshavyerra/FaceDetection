import React from 'react';
import './ImageForm.css';

const ImageForm = ({ onInputChange, onButtonClick }) => {
	return (
	 <div>
	   <p className='f3 w-60 shadow-2 center pa2 br2 maroon'>
	     {'This magic brain will detect faces in your pictures. Give it a try!!'}
	   </p>
		<div className="center">
		  <div className="form center pa4 br3 shadow-5">
           <input className='f4 pa2 w-70 center' 
           type='text' 
           onChange={onInputChange}/>
           <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-red pointer'  onClick={onButtonClick}> Detect 
           </button>
          </div>
		</div>
	</div>
		);
}

export default ImageForm;
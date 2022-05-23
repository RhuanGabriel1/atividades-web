import React from 'react';
import './Image.css';


const Image = (props) =>(
        <div className='imagem-edit'>
                <img src={props.link}
                 alt="Imagem livro"></img>
                <button id='remove'><span>X</span></button>
                <button onClick={props.onDeleteHandler}  id='edit'><span>I</span></button>
        </div>
)
 
export default Image;

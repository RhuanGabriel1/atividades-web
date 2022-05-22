import React from 'react';
import './Image.css';


const Image = (props) =>(
        <div className='imagem-edit'>
                <img src={props.name}
                 alt="Imagem livro"></img>
                <button onClick={props.onDeleteHandler} id='remove'><span>X</span></button>
                <button id='edit'><span>I</span></button>
        </div>
)
 
export default Image;

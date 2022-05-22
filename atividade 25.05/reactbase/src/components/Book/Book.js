import React from 'react';
import Image from '../Image/Image';
import './Book.css';
import App from '../../App';

const Book = ({name, author, pages, linkImage, onDeleteHandler}) => {
    return(
        <>
        <div className='Book'>
            <p>{name}</p>
            <p>{author}</p>
            <p>{pages}</p>
        </div>
        <Image link={linkImage ? linkImage:"https://images-na.ssl-images-amazon.com/images/I/912xRMMra4L.jpg"} onDeleteHandler = {onDeleteHandler()} />
        </>
    );
}

export default Book;
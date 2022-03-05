import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

//styles
import {Image, Wrapper} from './Thumb.styles'

const Thumb = ({image, movieId, clickable}) => (
    <Wrapper >
        {clickable ? (
            <Link to={`/${movieId}`} >
               <Image src={image} alt='movie-thumb'/>
            </Link>
        ) : (
            <Image src={image} alt='movie-thumb'/>
        )}

        {/* <Link to={`/${movieId}`} >
           <Image src={image} alt='movie-thumb'/>
        </Link> */}
    </Wrapper>
);

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
}

export default Thumb;
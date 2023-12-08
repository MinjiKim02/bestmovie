import React from 'react'

const MovieCard = (props) => {
    return (
        <div className='card'>
            <div className='poster'>
                <img src="" />
            </div>

            <div className='info'>
                <p className='title'>{props.title}</p>
                <p className='vote'>{props.vote_average}</p>
            </div>



        </div>
    )
}

export default MovieCard
import React from 'react'

import { Link } from 'react-router-dom';

export default function DisplayData({ item }) {
    console.log(item);
    return (
        <>
            
                <div className="col-md-2 py-2  ">
                <Link to={`/MediaDetails/${item.id}/${item.media_type}`}  >
                    <div className='position-relative '>
                        {item.vote_average ? <div className="bg-info position-absolute top-0 end-0 p-1 fw-bold ">{parseFloat(item.vote_average).toFixed(1)}</div> : " "}

                        {item.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className='w-100' alt="" /> : <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} className='w-100' alt="" />}

                        <h3 className='h6 text-white text-center pt-1  '>{item.title}{item.name}</h3 >
                    </div>
                    </Link>
                </div>
            
        </>

    )
}

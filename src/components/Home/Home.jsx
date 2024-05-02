import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import MediaItem from '../MediaItem/MediaItem';
import { Helmet } from "react-helmet"
import { MediaContext } from '../Context/MediaContext';

export default function Home() {

  let { movie, tv, person, setMovie, setTv, setPerson, getData } = useContext(MediaContext)
  useEffect(() => {
    getData("movie", setMovie)
    getData("tv", setTv)
    getData("person", setPerson)


  }, [])
  return (
    <>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="container">
        {/* movies */}
        <div className="row py-4">
          <div className="col-md-4 d-flex align-items-center">
            <div>
              <div className='bdr w-25 mb-3 '></div>
              <div className="text-white py-3">
                <h2 className='h3'>Trending <br /> Movies <br /> To Watch Now</h2>
                <p className=' pt-3 '>Most watched Movies Watched By Days</p>
              </div>
              <div className='bdr w-100 mt-3'></div>
            </div>
          </div>
          {movie.filter((item) => item.poster_path != null).slice(0, 10).map((item, index) => <MediaItem key={index} item={item} />)}
        </div>
        {/* tv */}
        <div className="row py-4 ">
          <div className="col-md-4 flex align-items-center">
            <div>
              <div className='bdr w-25 mb-3 '></div>
              <div className="text-white py-3">
                <h2 className='h3'>Trending <br /> TV <br /> To Watch Now</h2>
                <p className=' pt-3 '>Most watched tv Watched By Days</p>
              </div>
              <div className='bdr w-100 mt-3'></div>
            </div>
          </div>
          {tv.filter((item) => item.poster_path != null).slice(0, 10).map((item, index) => <MediaItem key={index} item={item} />)}
        </div>
        {/* people */}
        <div className="row py-4 ">
          <div className="col-md-4 flex align-items-center">
            <div>
              <div className='bdr w-25 mb-3 '></div>
              <div className="text-white py-3">
                <h2 className='h3'>Trending <br /> People <br /> To Watch Now</h2>
                <p className=' pt-3 '>Most watched tv Watched By Days</p>
              </div>
              <div className='bdr w-100 mt-3'></div>
            </div>
          </div>
          {person.filter((item) => item.profile_path != null).slice(0, 10).map((item, index) => <MediaItem key={index} item={item} />)}
        </div>
      </div>
    </>
  )
}

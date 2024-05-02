import React, { useContext, useEffect } from 'react'
import { MediaContext } from '../Context/MediaContext'
import MediaItem from '../MediaItem/MediaItem';

export default function Movies() {
  let { movie, getData,setMovie } = useContext(MediaContext)

  useEffect(() => {
    getData("movie", setMovie)
  }, [])

  return <>
    <div className="container ">
      <div className="row mt-5">
      {movie.filter((item) => item.poster_path != null).map((item, index) => <MediaItem key={index} item={item} />)}
        
      </div>
    </div>
  </>
}

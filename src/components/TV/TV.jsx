import React, { useContext, useEffect } from 'react'
import { MediaContext } from '../Context/MediaContext'
import MediaItem from '../MediaItem/MediaItem';


export default function TV() {
  let { tv, getData,setTv } = useContext(MediaContext)

  useEffect(() => {
    getData("tv", setTv)
  }, [])

  return <>
    <div className="container ">
      <div className="row mt-5">
      {tv.filter((item) => item.poster_path != null).map((item, index) => <MediaItem key={index} item={item} />)}
        
      </div>
    </div>
  </>
}

import React, { useContext, useEffect } from 'react'
import { MediaContext } from '../Context/MediaContext'
import MediaItem from '../MediaItem/MediaItem';

export default function People() {
  let { person, getData,setPerson } = useContext(MediaContext)

  useEffect(() => {
    getData("person", setPerson)
  }, [])

  return <>
    <div className="container ">
      <div className="row mt-5">
      {person.filter((item) => item.profile_path != null).map((item, index) => <MediaItem key={index} item={item} />)}
        
      </div>
    </div>
  </>
}
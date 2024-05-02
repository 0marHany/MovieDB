import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet"

export default function MediaDetails() {
  let { id, media_type } = useParams();
  console.log(id);
  const [details, setDetails] = useState({})
  useEffect(() => {
    getDetails()
  }, [])
  async function getDetails() {
    let { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=6f0419d377cd2732789b55d594ddb25b&append_to_response=videos`)
    setDetails(data)
   
    // console.log(arr.map((e) => <p className='bg-info rounded text-white py-1 px-2 mx-2'>{e}</p>));

  }
  return (<>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{details.title?details.title:details.name}</title>
    </Helmet>
    <div className="container ">
      <div className="row mt-5">
        <div className="col-md-4">
          {details.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} className='w-100' alt="" /> : <img src={`https://image.tmdb.org/t/p/w500${details.profile_path}`} className='w-100' alt="" />}
        </div>
        <div className="col-md-8">
          <div>
            <h2 className='h4 text-white pt-1  '>{details.title}{details.name}</h2 >
            <p>{details.tagline}</p>
            <div className='d-flex '>
              {details.genres && details.genres.map((genre) => (
                <p key={genre.id} className=' bg-info rounded text-white py-1 px-2 mx-2'>{genre.name}</p>
              ))}
            </div>
            <p className='my-2'> {details.vote_average ? `vote : ${details.vote_average}` : `known for department : ${details.known_for_department}`}</p>
            <p className='my-4'>{details.vote_count ? `vote count : ${details.vote_count}` : `birthday : ${details.birthday}`}</p>
            <p className='my-4'>popularity : {details.popularity}</p>
            {details.release_date ? <p className='my-4'>release date : {details.release_date}</p> : " "}
            {details.place_of_birth ? <p className='my-4'> place of birth : {details.place_of_birth}</p> : " "}
            {details.deathday ? <p className='my-4'>deathday : {details.deathday}</p> : " "}

            <p className=''>{details.overview}{details.biography}</p>
          </div>

        </div>
      </div>
    </div>
  </>
  )
}

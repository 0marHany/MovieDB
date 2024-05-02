import axios from 'axios'
import React, { createContext, useState } from 'react'

export let MediaContext = createContext(0)
export default function MediaProvider(props) {
    const [movie, setMovie] = useState([])
    const [tv, setTv] = useState([])
    const [person, setPerson] = useState([])
  
    async function getData(type, setData) {
      const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=6f0419d377cd2732789b55d594ddb25b&append_to_response=videos`)
      // console.log("the data of " + type + " :");
      // console.log(data);
      setData(data.results)
    }
    return <MediaContext.Provider value={{ movie ,tv,person,setMovie,setTv,setPerson,getData}} >
        {props.children}
    </MediaContext.Provider>
}

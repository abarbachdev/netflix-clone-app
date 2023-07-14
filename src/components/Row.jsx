import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'


const Row = ({title, fetchUrl}) => {

    const [movies,setMovies] = useState([])
 
    useEffect(()=>{
        axios.get(fetchUrl).then((response)=> {
            setMovies(response.data.results)
        })

    },[fetchUrl]) 

    console.log(movies)


  return (
    <div>
        <h2 className='text-white  md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center'>
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movies.map(( item, id) => (
                    <Movie key={id} item={item}/>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Row
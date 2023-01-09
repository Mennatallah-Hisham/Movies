import {useEffect , useState, useCallback} from 'react';

import searchIcon from "./search.svg";
import style from "./AllMovies.module.css";
import Movie from './Movie';

const AllMovies= (props) =>{

    const [searchTerm,setSearchTerm]=useState("superman");
    const [movies,setMovies]=useState([]);
    const API_URL="http://www.omdbapi.com/?i=tt3896198&apikey=db9aafb9";

    const searchMoviesHandler=(e)=>{
        e.preventDefault();
     fetchMovies();
    }

    const fetchMovies =useCallback(async ()=>{
   
        try{

      

     const response = await fetch(`${API_URL}&s=${searchTerm}`);
     if(!response.ok){
        throw new Error("something went wrong");
     }
      const data = await response.json();
      setMovies(data.Search);
   
      
 
    }catch(e){
        // alert(e.message);


    }

    },[searchTerm])



    useEffect(()=>{
        fetchMovies();

    
    },[fetchMovies]);


    const inputHandler =(e)=>{
      
        setSearchTerm(e.target.value)
    }



return <div>

  
    <form className={style.searchBar} onSubmit={searchMoviesHandler}>
        <input 
        placeholder="search for movies"
        onChange={inputHandler}

            />
            <button>
            <img 
            src={searchIcon} 
            alt="search"
            className={style.icon}
           />
            </button>
      
          
    </form>
        
        


{movies?.length >0 ?
<div className={style.moviesContainer}>
   { movies.map((movie)=>
        <Movie 
        key={`${movie.Title}+${movie.Year}`}
        Poster={movie.Poster}
        Title={movie.Title}
        Type={movie.Type}
        Year={movie.Year}
        />
       
    )
   }
    </div>
    :
    <div className={style.errorMsg}>
        no movies found
        </div>
  
}
   

  
</div>



}


export default AllMovies;
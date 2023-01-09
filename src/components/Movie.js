import style from "./Movie.module.css";
const Movie =(props)=>{


    return<div className={style.movieCard}>
  <img src={props.Poster !=='N/A' ?props.Poster : 'https://via.placholder.com/400'} 
            
            alt={props.Title}/>
            <p className={style.title}>{props.Title}</p>
       
            <p className={style.year}>{props.Year}</p>

    </div>
}

export default Movie;
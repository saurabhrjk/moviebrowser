import { useEffect, useState } from 'react';
import Hero from './Hero';
import { useParams } from 'react-router-dom';


const MovieView = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)

    const [movieDetail, setMovieDetails] = useState({})
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7e51cb0a1147e866594926f59e17bc02`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
                setIsLoading(false)
            })
    }, [id])

    function renderMovieDetails() {
        if (isLoading) {
            return <Hero text="Loading..." />
        }
        if (movieDetail) {
            const poster_path=`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`
            const backdropUrl=`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`
            const trailer =`https://www.youtube.com/results?search_query=${movieDetail.original_title}+trailer`
            const imdb = `https://www.imdb.com/find/?q=${movieDetail.original_title}`
            return (
            <><Hero text={movieDetail.original_title}/>
            <div className='movieview p-5' width="100%" style={{backgroundImage : `url(${backdropUrl})`}}>
            
           
            <div className='container '>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src={poster_path} alt=".." className='img-fluid shadow rounded' />
                    </div>
                    <div className='col-md-9'>
                        <h2>{movieDetail.original_title}</h2>
                        <p>{movieDetail.tagline}</p>
                        <p className='lead'><strong>Overview</strong></p>
                        <p>{movieDetail.overview}</p>
                        <p>Release date : {movieDetail.release_date}</p>
                        <p>Run-time : {movieDetail.runtime} minutes</p>
                        <p><a class="imdb" href={imdb}>Imdb</a></p>
                        
                        <p><a class="play_trailer" href={trailer} >Play Trailer</a></p>
                        
                    </div>
                </div>
            </div>
            </div>
            </>)
        }
    }

    return renderMovieDetails()
}

export default MovieView;
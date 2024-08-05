import Hero from './Hero';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  const detailUrl = `/movie/${movie.id}`
  return (
    <div className='col-lg-3 col-md-3 col-2 my-4'>
      <div className="card">
        <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text"></p>
          <Link to={detailUrl} className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  )
}



const Searchview = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`

  const resultHtml = searchResults.map((obj, i) => {
    return (<MovieCard movie={obj} key={i} />)


  })

  return (
    <>
      <Hero text={title} />
      {resultHtml &&
        <div className='container'>
          <div className='row'>
            {resultHtml}
          </div></div>}
    </>
  )
}

export default Searchview;
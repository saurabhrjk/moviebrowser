import Hero from './Hero';
const AboutView = () => {
  return (
    <>
      <Hero text='About us' />
      <div className='container'>
        <div className='row aboutbackground mt-4'>
          <p className='lead'>
            <strong>What We Offer:</strong><br></br><br></br>

            <li>Detailed Movie Information: <i>Get the latest updates on your favorite movies, including release dates, overviews, and runtime details.
            </i></li><li>Comprehensive Overviews: <i>Dive deep into the plot and storyline with our detailed movie overviews.
            </i></li><li>Release Dates: <i>Stay informed about upcoming movie releases and plan your viewing schedule.
            </i></li><li>Runtime Details: <i>Know the exact duration of movies to better manage your time.
            </i> </li> </p>
        </div>

      </div>

    </>
  )
}

export default AboutView;
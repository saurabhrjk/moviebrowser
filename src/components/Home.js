
import Hero from './Hero';
import PopularMovie from './PopularMovie';
const Home = () => {


  return (
    <>
      <Hero text="Welcome to Movie Browser" />
      <div className='container'>
        <div className='row mt-4' >
            <PopularMovie/>
        </div>
      </div>
      <footer className='footer' style={{backgroundColor:"black",color:"white"}}>
        <h3>Thanks for visiting Movie Browser.</h3>
      </footer>
      
    </>
  )
}

export default Home;
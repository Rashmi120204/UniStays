import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ExploreDestinations from './components/ExploreDestinations'
import FeaturedStays from './components/FeaturedStays'
import About from './components/About'
import Enquiry from './components/Enquiry'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-green-950">

      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* Explore Destinations */}
      <ExploreDestinations />

      {/* Featured Stays */}
      <FeaturedStays />

      {/* About Uniworld Stays */}
      <About />

      {/* Enquiry Section */}
      <Enquiry />

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App
import LandingHero from "../components/UI/LandingHero"
import Header from "../components/UI/Header"
import Missions from "../components/Missions"
import CoreValues from "../components/UI/CoreValues"
import CarouselPage from "../components/UI/Carousel"



const LandingPage = () => {


  return (

    <main className="md:mt-2 md:h-full">
    <Header />
    <LandingHero />
    <Missions />
    <CoreValues />
    <CarouselPage />
    </main>

  )
}

export default LandingPage
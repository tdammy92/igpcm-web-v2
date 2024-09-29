import LandingHero from "../components/UI/LandingHero"
import Header from "../components/UI/Header"
import Missions from "../components/Missions"
import CoreValues from "../components/UI/CoreValues"



const LandingPage = () => {


  return (

    <main className="md:mt-2 md:h-full">
    <Header />
    <LandingHero />
    <Missions />
    <CoreValues />
    </main>

  )
}

export default LandingPage
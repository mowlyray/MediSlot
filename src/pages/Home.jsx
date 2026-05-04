import Banner from "../components/Banner"
import BookAppointment from "../components/BookAppointment"
import SpecialityMenu from "../components/SpecialityMenu"
import TopDoctors from "../components/TopDoctors"

function Home() {
  return (
    <div>
      <Banner/>
      <SpecialityMenu/>
      <TopDoctors/>
      <BookAppointment/>    
    </div>
  )
}

export default Home

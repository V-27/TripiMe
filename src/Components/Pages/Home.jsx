import Counter from '../Counter'
import Destinations from '../destinations'
import Herobanner from '../Herobanner'
import Plantrip from '../Plantrip'
import Specialoffer from '../Specialoffer'
import Testimonials from '../Testimonials'
function Home() {
    console.log('Home rendered ✅')
    return (
        <div>
            <Herobanner />
            <Specialoffer />
            <Destinations />
            <Counter />
            <Plantrip />
            <Testimonials/>
        </div>
    )
}
export default Home
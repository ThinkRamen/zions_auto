import FeaturedVehicleCard from '../Components/FeaturedVehicleCard'
import Hero from '../Components/Hero'
function Home() {
	return (
		<>
			<Hero />
			<section className='d-grid p-4'>
				<h1>Featured Vehicles</h1>
				<div className='d-flex justify-content-evenly p-4'>
					{/* API should pull vehicles tagged with 'Featured', card count will  be dynamic */}
					<FeaturedVehicleCard />
					<FeaturedVehicleCard />
					<FeaturedVehicleCard />
					<FeaturedVehicleCard />
				</div>
			</section>
		</>
	)
}

export default Home

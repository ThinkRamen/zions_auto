import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Hero() {
	return (
		<>
			<div className='hero p-4'>
				<h1 className='pb-5'>FIND YOUR NEXT CAR AT ZIONS AUTO SALES</h1>
				<div className='button-group m-4'>
					<Link to='cars'>
						<Button variant='dark' size='lg'>
							Inventory
						</Button>
					</Link>
					<Link to='finance'>
						<Button variant='dark' size='lg'>
							Apply Online
						</Button>
					</Link>
					<Link to='contact'>
						<Button variant='dark' size='lg'>
							Contact
						</Button>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Hero

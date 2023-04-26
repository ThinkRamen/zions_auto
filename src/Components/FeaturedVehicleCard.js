import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function FeaturedVehicleCard() {
	return (
		<Card style={{ width: '18rem', color: 'black' }}>
			<Card.Img
				variant='top'
				src='https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200'
			/>
			<Card.Body>
				<Card.Title style={{ 'text-transform': 'uppercase' }}>
					vehicle name
				</Card.Title>
				<Card.Text>100,000 miles</Card.Text>
				<Button variant='dark'>View</Button>
			</Card.Body>
		</Card>
	)
}

export default FeaturedVehicleCard

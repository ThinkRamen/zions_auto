import { Form, FormLabel } from 'react-bootstrap'
function Contact() {
	return (
		<>
			<h1>Contact</h1>
			<Form>
				<FormLabel>Contact Request</FormLabel>
				<FormLabel>First Name:</FormLabel>
				<FormLabel>Last Name:</FormLabel>
				<FormLabel>Email:</FormLabel>
				<FormLabel>Phone Number:</FormLabel>
				<FormLabel>Comments</FormLabel>
			</Form>
		</>
	)
}

export default Contact

import {
	Form,
	FormGroup,
	FormLabel,
	FormControl,
	Container,
	Button,
	InputGroup
} from 'react-bootstrap'
function Finance() {
	return (
		<>
			<Container className='d-grid gap-1 p-2'>
				<h1>Zions Auto</h1>
				<h2>Secure Loan Application</h2>
				<Form className='d-grid gap-1'>
					{/* Amount */}
					{/* Loan Info */}
					<div className='d-flex bg-secondary text-light p-2 justify-content-start'>
						Loan Information
					</div>
					<FormGroup>
						<FormLabel>Desired Loan Amount: *</FormLabel>
						<InputGroup>
							<InputGroup.Text>$</InputGroup.Text>
							<FormControl />
						</InputGroup>
					</FormGroup>
					{/* Monthly */}
					<FormGroup>
						<FormLabel>Desired Monthly Payment:</FormLabel>
						<InputGroup>
							<InputGroup.Text>$</InputGroup.Text>
							<FormControl />
						</InputGroup>
					</FormGroup>
					{/* Personal */}
					<div className='d-flex bg-secondary text-light p-2 justify-content-start'>
						Personal
					</div>
					<FormGroup>
						<FormLabel>First Name: *</FormLabel>
						<FormControl />
					</FormGroup>
					<FormGroup>
						<FormLabel>Middle Initial: *</FormLabel>
						<FormControl />
					</FormGroup>
					<FormGroup>
						<FormLabel>Last Name: *</FormLabel>
						<FormControl />
					</FormGroup>
					<FormGroup>
						<FormLabel>Address: *</FormLabel>
						<FormControl />
					</FormGroup>
					<FormGroup>
						<FormLabel>City: *</FormLabel>
						<FormControl />
					</FormGroup>
					<FormGroup>
						<FormLabel>State: *</FormLabel>
						<Form.Select>
							<option>State</option>
						</Form.Select>
					</FormGroup>
					<FormGroup>
						<FormLabel>Zip: *</FormLabel>
						<FormControl />
					</FormGroup>
					<FormGroup>
						<FormLabel>Phone #: *</FormLabel>
						<FormControl />
					</FormGroup>
					<FormGroup>
						<FormLabel>Email: *</FormLabel>
						<FormControl />
					</FormGroup>
					<FormGroup>
						<FormLabel>Birthday: *</FormLabel>
						<FormControl />
					</FormGroup>
					<FormGroup>
						<FormLabel>Mortgage/Rent Payment: *</FormLabel>
						<FormControl />
					</FormGroup>
					{/* Proof of Income */}
				</Form>
				{/* Submit */}
				<p align='justify' className='py-2 m-0'>
					By submitting this application, I certify that all information herein
					is true and complete. I agree I am providing this information to the
					dealer identified in this application and acknowledge that my
					information may be shared pursuant to the dealer’s privacy policy, if
					applicable. I hereby authorize this dealer, and any financial
					institution engaged as a service provider by this dealer, to retain
					this application and to check and verify my credit, employment and
					salary history. By submitting this application, I acknowledge I am
					authorizing this dealer to check my credit.
				</p>
				<Button fluid>Submit Application</Button>
			</Container>
		</>
	)
}

export default Finance

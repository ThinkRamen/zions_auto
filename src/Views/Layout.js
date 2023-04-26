import { Outlet } from 'react-router-dom'
//Bootstrap
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar,  } from 'react-bootstrap'
function Layout() {
	return (
		<>
			<div className='d-flex bg-secondary text-light justify-content-center py-1'>
				FINANCE TODAY!
			</div>
			<Navbar variant='dark' bg='dark' expand='lg' sticky='top'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand class='font-weight-bold'>
							ZIONS AUTO SALES
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<LinkContainer to='/cars'>
								<Nav.Link>CARS FOR SALE</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/parts'>
								<Nav.Link>PARTS FOR SALE</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/specials'>
								<Nav.Link>SPECIALS</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/finance'>
								<Nav.Link>FINANCE</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/about'>
								<Nav.Link>ABOUT US</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/contact'>
								<Nav.Link>CONTACT</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	)
}

export default Layout

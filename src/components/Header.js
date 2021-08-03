import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
// import SearchBox from './SearchBox.js'
// import logo from '../img/logo.png'
import logo from './logo.png'
import shadows from '@material-ui/core/styles/shadows'
import { Box, Grid, Link } from '@material-ui/core'
import { Container } from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}))

const Header = () => {
	return (
		<header>
			<div>
				<AppBar
					position='static'
					style={{ background: '#ffffff', boxShadow: 'none' }}>
					<Toolbar>
						<Grid
							justify='space-between'
							container
							direction='row'
							style={{ padding: '10px 20px 0 30px' }}>
							<img src={logo}></img>
							{/* <Typography color='textPrimary'> */}
							<Grid item style={{ margin: '34px 20px 0' }}>
								<Box fontWeight='fontWeightRegular' fontSize={15}>
									<Link
										href='/how_to_use'
										style={{ textDecoration: 'none', color: 'black' }}>
										HOW TO USE
									</Link>
								</Box>
							</Grid>
							<Grid item>
								<Box
									fontWeight='fontWeightRegular'
									fontSize={15}
									style={{ margin: '34px 20px 0' }}>
									<Link
										href='/'
										style={{ textDecoration: 'none', color: 'black' }}>
										ABOUT US
									</Link>
								</Box>
							</Grid>
							<Grid item>
								<Box
									fontWeight='fontWeightRegular'
									fontSize={15}
									style={{ margin: '34px 20px 0' }}>
									<Link
										href='https://forms.zohopublic.in/service2/form/ComplaintForm/formperma/ZjRl9ADZskE_NoZvQCHcYYxAjK94nEwFUdCwTy5H7eg'
										style={{ textDecoration: 'none', color: 'black' }}>
										CONTACT US
									</Link>
								</Box>
							</Grid>
							<Grid item>
								<Box
									fontWeight='fontWeightRegular'
									fontSize={15}
									style={{ margin: '34px 0 0' }}>
									<Link
										href='/'
										style={{ textDecoration: 'none', color: 'black' }}>
										LOGIN
									</Link>
								</Box>
							</Grid>
							<Grid item style={{ margin: '28px 20px 0' }}>
								<Button variant='contained' color='primary'>
									Get Started
								</Button>
							</Grid>
							{/* </Typography> */}
						</Grid>
					</Toolbar>
				</AppBar>
			</div>
			{/* <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<LinkContainer to='/how-to-use'>
								<Nav.Link> HOW TO USE</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/about-us'>
								<Nav.Link> ABOUT US</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/contact-us'>
								<Nav.Link> CONTACT US</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/'>
								<Nav.Link> LOGIN</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/'>
								<Nav.Link> GET STARTED</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar> */}
		</header>
	)
}

export default Header

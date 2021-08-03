import React from 'react'
import { Link } from 'react-router-dom'
import {
	Accordion,
	Typography,
	AppBar,
	Card,
	CardActions,
	CardMedia,
	CssBaseline,
	Grid,
	Toolbar,
	Container,
	Box,
	AccordionSummary,
	AccordionDetails,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const HomeScreen = () => {
	return (
		<>
			<CssBaseline />
			<main>
				<div>
					<Container maxWidth='sm'>
						<Typography align='center' color='textPrimary' gutterBottom>
							<Box fontWeight='fontWeightMedium' fontSize='h4.fontSize'>
								Resolve your smartphone complaint in these five simple steps
							</Box>
						</Typography>
						<Typography align='left' color='textPrimary' paragraph>
							<ol>
								<li>
									<p>
										If you are new to our website, create an account by clicking
										on GET STARTED. Users already registered with us may simply
										click on LOGIN
									</p>
								</li>
								<li>
									<p>
										Log in to ETark and select the brand of your smartphone
										which is causing trouble and the city from where you belong
									</p>
								</li>
								<li>
									<p>
										Proceed to Fill in your Complaint details and know your
										chances of winning
									</p>
								</li>
								<li>
									<p>Select the plan you wish to avail.</p>
									<ul>
										<li>
											<b>Pickup And Delivery Service: </b>
											It is advisable that for technical issues, you choose this
											plan which will get your phone taken to the authorized
											service center for an unparalleled quality service, get it
											fixed and returned safely to you in the shortest possible
											time under our strict supervision
										</li>
										<li>
											<b>Neo plan:</b> This is advisable for non- technical
											issues like Missing item or Payment where you may follow
											up with the company against which you have a grievance on
											your own but before you do so make use of our expert
											analysis covered under this plan so that you understand
											your position against the company.
										</li>
										<li>
											<b>Pickup And Delivery Service + Neo plan:</b> This is
											advisable when you have a technical issue with your
											smartphone but you also need clarification on your
											position against the company.
										</li>
									</ul>
								</li>
								<li>
									<p>After you make the payment :</p>
								</li>
								<ol>
									<li>
										You will be able to use our Instant Complaint analysis
										covered under the <b>Neo</b> plan instantly by clicking on
										the
										<b>Download Report</b> button
									</li>
									<li>
										For the <b> Pickup and Delivery Service</b>, we shall reach
										out to you within 24 hours* of your booking for the pickup
										of your phone between the service center open timings. We’ll
										take it up from there and return your phone when it’s
										serviced.
									</li>
								</ol>
							</ol>
						</Typography>
					</Container>
				</div>
			</main>
		</>
	)
}

export default HomeScreen

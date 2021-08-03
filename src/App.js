import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3' style={{ background: '#ffffff' }}>
				<>
					<Route path='/' component={HomeScreen} exact />
				</>
			</main>
		</Router>
	)
}
export default App

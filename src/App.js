import './App.css'
import './Styles/App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './Views/Home'
import Layout from './Views/Layout'
import Product from './Views/Product'
import Products from './Views/Products'
import Checkout from './Views/Checkout'
import About from './Views/About'
import Cars from './Views/Cars'
import Parts from './Views/Parts'
import Specials from './Views/Specials'
import Finance from './Views/Finance'
import Contact from './Views/Contact'
import AdminPanel from './Views/AdminPanel'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout />} class='m-2'>
					<Route index element={<Home />} />
					<Route path='products' element={<Products />} />
					<Route path='product' element={<Product />} />
					<Route path='checkout' element={<Checkout />} />
					<Route path='about' element={<About />} />
					<Route path='specials' element={<Specials />} />
					<Route path='finance' element={<Finance />} />
					<Route path='parts' element={<Parts />} />
					<Route path='cars' element={<Cars />} />
					<Route path='contact' element={<Contact />} />
					<Route path='admin' element={<AdminPanel />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App

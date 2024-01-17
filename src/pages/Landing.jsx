import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg'

import Wrapper from '../assets/wrappers/LandingPage'
import Logo from '../components/Logo'


const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo/>
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Job Hunt will allow you to track the progress of your interviews. It
						allows you to stay focus and organized, while keeping all interview
						up to date .
					</p>
					<Link to='/register' className='btn btn-hero'>
						Login/Register
					</Link>
				</div>
				<img src={main} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	)
}

export default Landing

import { useState } from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import { FormRow } from '../components'
import Logo from '../components/Logo'

const initialState = {
	name: '',
	email: '',
	password: '',
	isMember: true,
}

const Register = () => {
	const [values, setValues] = useState(initialState)

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(e.target)
	}
	const handleChange = (e) => {
		console.log(e.target)
	}
	return (
		<Wrapper className='full-page'>
			<form onSubmit={onSubmit} className='form'>
				<Logo />
				<h3>login</h3>
				{/* name field */}
				<FormRow
					type='text'
					name='name'
					value={values.name}
					handleChange={handleChange}
				/>
				{/* email field */}
				<FormRow
					type='email'
					name='email'
					value={values.email}
					handleChange={handleChange}
				/>
				{/* password field */}
				<FormRow
					type='password'
					name='password'
					value={values.password}
					handleChange={handleChange}
				/>
				<button className='btn btn-block'>submit</button>
			</form>
		</Wrapper>
	)
}

export default Register

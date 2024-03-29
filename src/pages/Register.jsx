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
	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember })
	}
	return (
		<Wrapper className='full-page'>
			<form onSubmit={onSubmit} className='form'>
				<Logo />
				<h3>{values.isMember ? 'Login' : 'Register'}</h3>
				{/* name field */}

				{!values.isMember && (
					<FormRow
						type='text'
						name='name'
						value={values.name}
						handleChange={handleChange}
					/>
				)}
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
				<button className='btn btn-block'> Submit</button>

				<p>
					{values.isMember ? 'Not a member yet?' : 'Already a member?'}

					<button className='member-btn' onClick={toggleMember}>
						{values.isMember ? 'Register' : 'Login'}
					</button>
				</p>
			</form>
		</Wrapper>
	)
}

export default Register

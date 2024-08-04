import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import styled from 'styled-components';
import bg from '../images/northernlights.jpg';
const Form = () => {
	const { register, reset, handleSubmit } = useForm();

	const [isSuccess, setIsSuccess] = useState(false);
	const [result, setResult] = useState(null);

	const accessKey = 'ae32d21c-cb9f-430c-83d7-d6fe791fb6a5';

	const { submit: onSubmit } = useWeb3Forms({
		access_key: accessKey,
		settings: {
			from_name: 'GLL',
			subject: 'New Contact Message from your Website',
		},
		onSuccess: (msg, data) => {
			setIsSuccess(true);
			setResult('Courriel envoyé avec succès!');
			console.log(msg);
			reset();
		},
		onError: (msg, data) => {
			setIsSuccess(false);
			setResult("Une erreur s'est produite, veuillez réessayer");
		},
	});

	return (
		<Wrapper>
			<Fader />
			<span>
				<h1>Nous sont là pour aider</h1>
				<br />
				<h4>Envoyez-nous un message en nous indiquant les changements que vous souhaitez apporter et nous vous contacterons.</h4>
			</span>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>{result}</div>
				<div className='flex mb-6 space-x-4'>
					<div className='w-full md:w-1/2'>
						<label
							htmlFor='fname'
							className='block mb-2 text-sm text-gray-200'
						>
							Prénom
						</label>
						<input
							type='text'
							{...register('name', { required: true })}
							id='first_name'
							placeholder='John'
							required
							className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
						/>
					</div>
					<div className='w-full md:w-1/2'>
						<label
							htmlFor='lname'
							className='block mb-2 text-sm text-gray-200'
						>
							Nom
						</label>
						<input
							type='text'
							{...register('lastName', { required: true })}
							id='lname'
							placeholder='Doe'
							required
							className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
						/>
					</div>
				</div>

				<div className='flex mb-6 space-x-4'>
					<div className='w-full md:w-1/2'>
						<label
							htmlFor='email'
							className='block mb-2 text-sm text-gray-200'
						>
							Email
						</label>
						<input
							type='email'
							{...register('email', { required: true })}
							id='email'
							placeholder='you@company.com'
							required
							className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
						/>
					</div>

					<div className='w-full md:w-1/2'>
						<label
							htmlFor='phone'
							className='block text-sm mb-2 text-gray-200'
						>
							Téléphone
						</label>
						<input
							type='text'
							name='phone'
							id='phone'
							placeholder='+1 (555) 1234-567'
							required
							className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
						/>
					</div>
				</div>

				{/* <div className='mb-6'>
					<label
						htmlFor='message'
						className='block mb-2 text-sm text-gray-200'
					>
						Attacher des images (.jpg / .png)
					</label>
					<input
						type='file'
						name='attachment'
						multiple
						accept='.jpg, .png, .jpeg'
					/>
				</div> */}
				<div className='mb-6'>
					<label
						htmlFor='message'
						className='block mb-2 text-sm text-gray-200'
					>
						Votre message
					</label>

					<textarea
						rows='5'
						name='message'
						id='message'
						placeholder='Votre message'
						className='w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
						required
					></textarea>
				</div>
				<div>
					<button
						type='Soumettre'
						className='w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none'
					>
						Soumettre
					</button>
				</div>
			</form>

			<Plug>©2024 Gestion Le Loup</Plug>
		</Wrapper>
	);
};
const Fader = styled.div`
	background: rgb(0, 0, 0);
	background: linear-gradient(180deg, rgba(10, 10, 10, 1) 0%, rgba(255, 255, 255, 0) 100%);
	height: 300px;
	width: 100%;
`;
const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: black;
	background: url(${bg});
	background-position: center;
	background-size: cover;
	padding: 0 0 4rem 0;

	span {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	h1,
	h4 {
		color: white;
		text-align: center;
		width: 80%;
	}

	form {
		background-color: rgba(10, 10, 10, 0.85);
		padding: 1rem 3rem;
		border-radius: 15px;
		@media only screen and (max-width: 650px) {
			max-width: 90%;
			padding: 1rem 1rem;
		}
	}
`;

const Plug = styled.p`
	width: 100%;
	text-align: center;
	color: white;
	font-size: 0.85rem;
`;

export default Form;

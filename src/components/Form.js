import { useState } from 'react';
import styled from 'styled-components';
import bg from '../images/northernlights.jpg';
import FileUploader from './FileUploader';
const Form = () => {
	const [result, setResult] = useState(null);
	const [success, setSuccess] = useState(false);

	const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append('access_key', 'ae32d21c-cb9f-430c-83d7-d6fe791fb6a5');

		const res = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData,
		}).then((res) => res.json());

		if (res.success) {
			setResult('Votre message a été envoyé avec succès!');
			event.target.reset();
			setSuccess(true);
		} else {
			setResult("Oops! Quelque chose s'est mal passé. Veuillez réessayer");
		}
		setSuccess(false);
	};

	return (
		<Wrapper>
			<Fader />
			<span>
				<h4>Veuillez nous contacter et l'un de nos spécialistes vous répondra sous peu</h4>
				<br />
			</span>
			<form
				method='POST'
				action='https://api.web3forms.com/submit'
			>
				<div
					className='text-white text-center'
					style={{ fontSize: 'larger', textDecoration: 'underline' }}
				>
					{result}
					<input
						type='hidden'
						name='access_key'
						value='ae32d21c-cb9f-430c-83d7-d6fe791fb6a5'
					/>
				</div>
				<div className='flex mb-3 space-x-4'>
					<div className='w-full md:w-1/2'>
						<label
							htmlFor='first_name'
							className='block mb-2 text-sm text-gray-200'
						>
							Prénom
						</label>
						<input
							type='text'
							id='first_name'
							name='first_name'
							placeholder='John'
							required
							className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
						/>
					</div>
					<div className='w-full md:w-1/2'>
						<label
							htmlFor='last_name'
							className='block mb-2 text-sm text-gray-200'
						>
							Nom
						</label>
						<input
							type='text'
							id='last_name'
							name='last_name'
							placeholder='Doe'
							required
							className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
						/>
					</div>
				</div>

				<div className='flex mb-3 space-x-4'>
					<div className='w-full md:w-1/2'>
						<label
							htmlFor='email'
							className='block mb-2 text-sm text-gray-200'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
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

				<div className='mb-6'>
					<label
						htmlFor='attachment'
						className='block mb-2 text-sm text-gray-200'
					>
						Attacher des images (.jpg / .png)
					</label>
					<FileUploader reset={success} />
					{/* <input
						type='file'
						data-advanced='true'
						name='attachment'
						multiple
						accept='.jpg, .png, .jpeg'
					/> */}
				</div>
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
	top: 0;
	position: absolute;
	z-index: 0;
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
		z-index: 99;
	}
	h1,
	h4 {
		color: white;
		text-align: center;
		width: 80%;
		z-index: 99;
	}

	form {
		z-index: 99;
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

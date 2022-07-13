import Head from 'next/head';
import React from 'react';
import Button from '../../../components/UI/Button';
import { fetchMealById } from '../../../helpers/fetchMealById';
import { fetchMenu } from '../../../helpers/fetchMenu';

const MealDetailPage = ({ meal }) => {
	if (!meal) {
		return <p>Loading..</p>;
	}

	return (
		<div className='bg-slate-50 pt-5 px-20 flex items-center h-screen flex-col'>
			<Head>
				<title>{meal.title}</title>
				<meta
					name='description'
					content={meal.description}
				/>
			</Head>
			<div className='w-full flex justify-center'>
				<img src={meal.image} className='w-1/4' alt='' />
			</div>
			<div className='flex flex-col items-center gap-3'>
				<h1 className='font-bold text-5xl text-slate-800'>{meal.title}</h1>
				<p className='text-xl font-regular'>{meal.description}</p>
				<span className='font-semibold text-2xl'>${meal.price}</span>
				<div>
					<Button className='bg-orange-500 hover:bg-orange-600 w-28'>
						Order Now
					</Button>
				</div>
			</div>
		</div>
	);
};

export default MealDetailPage;

export async function getStaticProps(context) {
	const mealId = context.params.mealId;
	const meal = await fetchMealById(mealId);

	if (!meal) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			meal,
		},
		revalidate: 20,
	};
}

export async function getStaticPaths() {
	const menu = await fetchMenu();
	const paths = menu.map(meal => ({ params: { mealId: meal.id } }));

	return {
		paths: paths,
		fallback: true,
	};
}

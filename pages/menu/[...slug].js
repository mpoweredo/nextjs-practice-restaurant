import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MenuList from '../../components/menu/MenuList';
import { fetchMealByCategory } from '../../helpers/fetchMealByCategory';
import FilterMeals from '../../components/menu/FilterMeals';

const FilteredMenuPage = () => {
	const [loadedMeals, setLoadedMeals] = useState([]);
	const [error, setError] = useState('');
	const [category, setCategory] = useState('');
	const router = useRouter();

	const filterByCategoryHandler = async category => {
		const path = `/menu/category/${category}`;
		// console.log(category)
		router.push(path);
	};

	useEffect(() => {
		if (category !== undefined) {
			const fetchData = async () => {
				const data = await fetchMealByCategory(category[1]);
				setLoadedMeals(data);
			};

			try {
				fetchData();
			} catch (error) {
				setError(error);
			}
		}
	}, [category]);

	useEffect(() => {
		if (router.query.slug !== undefined) {
			setCategory(router.query.slug);
		}
	}, [router]);

	if (error) {
		return <p>Something went wrong, try again later!</p>;
	}

	return (
		<div className='bg-slate-50 pt-2 min-h-screen flex items-center flex-col'>
			<Head>
				<title>Filtered menu</title>
				<meta name='description' content={`a list of filtered meals`} />
			</Head>
			<div className='w-3/5 flex flex-col items-center mt-3'>
				<FilterMeals filterByCategory={filterByCategoryHandler} />
				<MenuList items={loadedMeals} />
			</div>
		</div>
	);
};

export default FilteredMenuPage;

// export async function getServerSideProps(context) {
// 	const { params } = context;
// 	const category = params.slug[1];
// 	const data = await fetchMealByCategory(category);

// 	return {
// 		props: {
// 			filteredMeals: data,
// 			category: category,
// 		},
// 	};
// }

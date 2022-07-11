import React, { useState } from 'react';
import FilterMeals from '../../components/menu/FilterMeals';
import MenuList from '../../components/menu/MenuList';
import { fetchMenu } from '../../helpers/fetchMenu';
import { useRouter } from 'next/router';
import Head from 'next/head';

const MenuPage = ({ availableMeals }) => {
	const router = useRouter();

	const filterByCategoryHandler = async category => {
		const path = `/menu/category/${category}`;
		// console.log(category)
		router.push(path);
	};

	return (
		<div className='bg-slate-50 pt-2 min-h-screen flex items-center justify-center w-full flex-col'>
			<Head>
				<title>Full menu</title>
				<meta
					name='description'
					content='Order a lot of delicous cheap food!'
				/>
			</Head>
			<FilterMeals filterByCategory={filterByCategoryHandler} />
			<div className='w-full flex items-center justify-center mt-3'>
				<MenuList items={availableMeals} />
			</div>
		</div>
	);
};

export default MenuPage;

export async function getStaticProps() {
	const availableMeals = await fetchMenu();

	return {
		props: {
			availableMeals,
		},
	};
}

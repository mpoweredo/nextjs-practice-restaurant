import Link from 'next/link';
import Head from 'next/head'
import MenuList from '../components/menu/MenuList';
import Button from '../components/UI/Button';
import { fetchMenu } from '../helpers/fetchMenu';

export default function Home({ mostOrdered }) {

	return (
		<div className='bg-slate-50 pt-2 min-h-screen'>
			<Head>
				<title>Meals</title>
				<meta name='description' content='Order a lot of delicous cheap food!' />
			</Head>
			<div className='px-20 w-full flex items-center justify-center flex-col gap-4'>
				<h1 className='mb-1 text-3xl font-semibold'>The most ordered meals in our store!</h1>
				<MenuList items={mostOrdered} />
				<Button className='bg-indigo-400 hover:bg-indigo-500 text-md' width={44}>
					<Link href='/menu'>Check all meals</Link>
				</Button>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const data = await fetchMenu();
	const mostOrdered = data.filter(item => item.mostOrdered === true)

	return {
		props: {
			mostOrdered
		},
	};
}

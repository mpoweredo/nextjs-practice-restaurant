import React from 'react';
import Button from '../UI/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MainNavigation = () => {
	const router = useRouter()

	return (
		<header className='sm:flex hidden px-20 justify-between items-center shadow-sm h-20'>
			<div>
				<h1 className='font-bold text-2xl'>
					<Link href='/'>Logo</Link>
				</h1>
			</div>
			<nav>
				<ul className='flex gap-10  font-semibold text-gray-400'>
					<li className={router.pathname === '/' ? 'text-gray-800' : ''}>
						<Link href='/'>Home</Link>
					</li>
					<li className={router.pathname.includes('menu') ? 'text-gray-800' : ''}>
						<Link href='/menu'>Menu</Link>
					</li>
					<li className={router.pathname === '/service' ? 'text-gray-800' : ''}>
						<Link href='/service'>Service</Link>
					</li>
					<li className={router.pathname === '/delivery' ? 'text-gray-800' : ''}>
						<Link href='/delivery'>Delivery</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;

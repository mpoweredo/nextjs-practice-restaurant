import React from 'react';
import Button from '../UI/Button';
import Link from 'next/link';
import Image from 'next/image';

const MenuItem = ({ title, description, image, price, id }) => {
	return (
		<li className='sm:w-[500px] xl:w-[550px] 2xl:w-[600px] w-[310px] bg-gray-200 flex h-64 rounded py-2 sm:p-4 gap-4'>
			<div className='h-full w-36 sm:w-60'>
				<Image src={image} alt={title} width={200} height={230} unoptimized quality={100} />
				{/* <img
					className='w-full h-full object-contain rounded'
					src={image}
					alt={title}
				/> */}
			</div>
			<div className='w-2/3 flex flex-col'>
				<h1 className='font-bold text-lg md:text-2xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl text-slate-800'>
					{title}
				</h1>
				<p className='font-semibold md:text-xl sm:text-xl text-xl text-slate-800'>
					{price}$
				</p>
				<h4 className='text-sm md:text-md xl:text-xl font-medium mt-5'>
					{description}
				</h4>
				<Button className='bg-orange-500 hover:bg-orange-600 w-28'>
					<Link href={`/menu/${id}`}>Details</Link>
				</Button>
			</div>
		</li>
	);
};

export default MenuItem;

import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ items }) => {
	return (
			<ul className='flex flex-col gap-3 w-100 justify-center items-center'>
				{items.map(item => (
					<MenuItem
						title={item.title}
						price={item.price}
						description={item.description}
						id={item.id}
						key={item.id}
						image={item.image}
					/>
				))}
			</ul>
	);
};

export default MenuList;

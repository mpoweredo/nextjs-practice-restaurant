import React, { useRef } from 'react';
import Button from '../UI/Button';

const FilterMeals = ({ filterByCategory }) => {
	const categoryInputRef = useRef();

	const submitHandler = (e) => {
        e.preventDefault()
        filterByCategory(categoryInputRef.current.value)
    };

	return (
		<div className='my-2 w-[320px]'>
			<form onSubmit={submitHandler}>
				<div className='bg-gray-200 p-3 rounded-sm'>
					<div className='mb-2'>
						<label htmlFor='category' className='font-semibold text-xl'>
							Search by category
						</label>
					</div>
					<div className='flex justify-center align-center gap-5'>
						<select
							className='w-2/3 px-2 bg-indigo-500 cursor-pointer text-white font-semibold text-md outline-none'
							name='category'
							defaultValue='fastfood'
							id='category'
							ref={categoryInputRef}>
							<option className='' value='fastfood'>Fast Food</option>
							<option className='hover:bg-indigo-600' value='sweets'>Sweets</option>
							<option className='hover:bg-indigo-600' value='dinner'>Dinner</option>
							<option className='hover:bg-indigo-600' value='drinks'>Drinks</option>
						</select>
						<Button className='bg-indigo-500 hover:bg-indigo-600 w-1/3'>Search</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default FilterMeals;

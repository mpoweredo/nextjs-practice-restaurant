import { FIREBASEURL } from '../firebaseURL';

export const fetchMealByCategory = async category => {
	try {
		const response = await fetch(`${FIREBASEURL}/Menu.json`);

		const data = await response.json();
		const loadedMenu = [];

		for (const key in data) {
			loadedMenu.push({
				id: key,
				...data[key],
			});
		}

		const filteredData = loadedMenu.filter(meal => meal.category === category);

		return filteredData;
	} catch (e) {
		return e;
	}
};

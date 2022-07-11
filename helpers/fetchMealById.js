import { FIREBASEURL } from "../firebaseURL"

export const fetchMealById = async id => {
    const response = await fetch(`${FIREBASEURL}/Menu/${id}.json`)
    const data = await response.json()
    return data
}
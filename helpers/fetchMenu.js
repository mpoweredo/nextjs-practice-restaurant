import { FIREBASEURL } from "../firebaseURL"

export const fetchMenu = async () => {
    const response = await fetch(`${FIREBASEURL}/Menu.json`)
    const data = await response.json()
    const loadedMenu = []

    for (const key in data) {
        loadedMenu.push({
            id: key,
            ...data[key]
        })
    }

    return loadedMenu
}

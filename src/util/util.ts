import { CharityCategory } from "../types"
import {charities} from "./data"

export const getRandomCharity = (name: CharityCategory, currentlySelected: string) => {
    const filteredCharities = charities.filter(charity => charity.category.includes(name) && charity.name !== currentlySelected)
    return filteredCharities[Math.floor(Math.random() * filteredCharities.length)]
}
export enum CharityCategory {
    animals = "animals",
    military = "military",
    humanitarian = "humanitarian"
}

export type Charity = {
    name: string,
    description: string,
    category: CharityCategory[],
    paypal_address?: string,
    payment_link?: string,
    image?: string,
    link?: string
}
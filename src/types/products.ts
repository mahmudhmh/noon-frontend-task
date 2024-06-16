export type Product = {
    id: string
    seller: {
        username: string
        img: string
    }
    title: string
    price: number
    img: string
    numberOfFavorites: number
    description: string
    tags: Array<string>
    numberOfComments: number
}

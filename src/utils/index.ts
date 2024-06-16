import { Product } from '@/types'

export const getFavorites = (): Array<Product> => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export const isProductFavorited = (id: Product['id']) => {
    const favorites = getFavorites()
    return favorites.some((product) => product.id === id)
}

export const updateFavorites = (product: Product, action: 'add' | 'remove') => {
    let favorites = getFavorites()

    if (action === 'add') {
        favorites.push(product)
    } else {
        favorites = favorites.filter((product) => product.id !== product.id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}

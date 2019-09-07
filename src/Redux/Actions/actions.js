import constant from './../Constants'

export const addToCart = (id) => (
    {
        productId: id,
        ts: new Data().toString()
    }
)
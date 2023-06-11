export default function (id) {
    const inCart = localStorage.getItem('cart')
    if (!inCart) {
        return
    } else {
        var itemList = JSON.parse(inCart)
        console.log(itemList.bucket.length)
        if (itemList.bucket.length === 1 && itemList.bucket[0]._id === id) {
            localStorage.removeItem('cart')
            return
        }
        for (let i = 0; i < itemList.bucket.length; i++) {
            if (itemList.bucket[i]._id === id) {
                localStorage.setItem('cart', JSON.stringify({ bucket: itemList.bucket.splice(i, 1) }))
                return
            }
        }
    }
}
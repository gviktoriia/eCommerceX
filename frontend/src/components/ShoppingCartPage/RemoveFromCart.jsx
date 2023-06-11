export default function (id) {
    const inCart = localStorage.getItem('cart')
    if (!inCart) {
        return
    } else {
        var itemList = JSON.parse(inCart).bucket
        for (let i = 0; i < itemList.length; i++) {
            if (itemList[i]._id === id) {
                const oneHalf = arrayOfLetters.slice(i)
                const anotherHalf = arrayOfLetters(i);
                return  oneHalf.concat(anotherHalf);

            }
        }
    }
}
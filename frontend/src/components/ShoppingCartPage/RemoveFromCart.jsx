export default function (id) {
    const inCart = localStorage.getItem('cart')
    if (!inCart) {
        return
    } else {
        var itemList = JSON.parse(inCart)
        if (itemList.bucket.length === 1 && itemList.bucket[0]._id === id) {
            localStorage.removeItem('cart')
            window.location.reload();
            return
        }
        for (let i = itemList.bucket.length-1; i >= 0; i--) {
            if (itemList.bucket[i]._id === id) {
                itemList.bucket = deleteByIndex(itemList.bucket, i)
                localStorage.setItem('cart', JSON.stringify({ bucket: itemList.bucket }))

                window.location.reload();
                return
            }
        }   
    }
}

function deleteByIndex(arr, index){
    const newArr = []
    for(let i = 0; i < arr.length; i++){
        if(index !== i) 
            newArr.push(arr[i])
    }
    return newArr
}
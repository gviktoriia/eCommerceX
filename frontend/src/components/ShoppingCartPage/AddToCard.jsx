export default function (newItem) {
  const inCart = localStorage.getItem('cart')
  if (!inCart) {
    const itemList = { bucket: [newItem] }
    localStorage.setItem('cart', JSON.stringify(itemList))
  } else {
    var itemList = JSON.parse(localStorage.getItem('cart'))
    itemList.bucket.push(newItem)
    localStorage.setItem('cart', JSON.stringify(itemList))
  }

}
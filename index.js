var cart;

function setCart(newCart) {
  cart = newCart;
}
function getCart(){
  return cart
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(item){
  var cart = getCart()
  console.log('prior cart:\n',cart)
  var price = Math.floor(Math.random()*10)
  cart.push(Object.assign({},{[item]:price}))
  console.log(`${item} has been added to your cart.`)
  console.log('current cart:\n',cart)
  return cart
}

function viewCart(){
  if(!cart.length){
    console.log("Your shopping cart is empty.")
  }
  var completeArray = "In your cart, you have"
  for(let i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i])[0]
    completeArray += ` ${item} at $${cart[i][item]}${i===cart.length-1?'.':','}`
  }
  console.log(completeArray)
}

function removeFromCart(item){
  for(let i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      if(i === cart.length - 1){
        cart.pop()
        return cart
      }
      return [...cart.slice(0,i),...cart.slice(i+1)]
    }
  }
  // if item not exist in cart
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber){
  if(!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
  }
}

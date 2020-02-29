const actions = {
  addItemToCart({ commit, state }, item) {
    commit('updateCart', item)
    console.log(state.cart)
  },
}

export default actions

// McDonalds === 1
// Burger King === 2
// Pizza Hut === 3

// const menu = [
//   {
//     id: 2,
//     foodItem: 21
//   },
//   {
//     id: 2,
//     foodItem: 22
//   },
//   {
//     id: 2,
//     foodItem: 23
//   },

//   // 
//   {
//     id: 1,
//     foodItem: 11,
//   }
// ],

// when you click an item 
// make it an object with its value and the restaurants id

// push that to the cart array

import { createStore } from "vuex";

const store = createStore({
    state: {
        cartList: (localStorage.getItem('cartList') && localStorage.getItem('cartList') != 'null') ? JSON.parse(localStorage.getItem('cartList')) : [],
        cartCounter: cartCounterValue(),
    },
    mutations: {
        addToCart: function (state, payload) {
            let duplicate = false;
            let { data, quantity } = payload;
            state.cartList.forEach((el, index) => {
                if (el.data.id == data.id) {
                    state.cartList[index].quantity = state.cartList[index].quantity + quantity;
                    state.cartCounter = state.cartCounter + quantity;
                    duplicate = true;
                }
            })
            if (duplicate) {
                localStorage.setItem('cartList', JSON.stringify(state.cartList));
            } else {
                state.cartCounter = state.cartCounter + quantity;
                state.cartList.push({ data: data, quantity: quantity });
                localStorage.setItem('cartList', JSON.stringify(state.cartList));

            }
        },
        increaseQuantity: function (state, payload) {
            let index = payload;
            state.cartList[index].quantity = state.cartList[index].quantity + 1
            state.cartCounter = state.cartCounter + 1;
            localStorage.setItem('cartList', JSON.stringify(state.cartList));

        },
        decreaseQuantity: function (state, payload) {
            let index = payload;
            if (state.cartList[index].quantity > 1) {
                state.cartList[index].quantity = state.cartList[index].quantity - 1
                state.cartCounter = state.cartCounter - 1;
                localStorage.setItem('cartList', JSON.stringify(state.cartList));
            }
        },
        removeItemFromCart: function (state, payload) {
            let index = payload;
            state.cartCounter = state.cartCounter - state.cartList[index].quantity;
            state.cartList.splice(index, 1);
            localStorage.setItem('cartList', JSON.stringify(state.cartList));
        }
    },
    actions: {

    },
    // getters: {
    //     calculateCartCounter: function (state) {
    //         console.log("hello")
    //         let counter = 0;
    //         if (localStorage.getItem('cartList') && localStorage.getItem('cartList') != 'null') {
    //             let cartValue = JSON.parse(localStorage.getItem('cartList'));
    //             for (let i = 0; i < cartValue.length; i++) {
    //                 counter = counter + cartValue[i].quantity;
    //             }
    //             state.cartCounter = counter;
    //         } else {
    //             state.cartCounter = 0;
    //         }
    //     }
    // }
})

export default store;

function cartCounterValue() {
    let counter = 0;
    if (localStorage.getItem('cartList') && localStorage.getItem('cartList') != 'null') {
        let cartValue = JSON.parse(localStorage.getItem('cartList'));
        for (let i = 0; i < cartValue.length; i++) {
            counter = counter + cartValue[i].quantity;
        }
        return counter;
    } else {
        return 0;
    }
}
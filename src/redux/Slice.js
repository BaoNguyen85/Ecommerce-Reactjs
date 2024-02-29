import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        deleteItem: (state, action) => {
            state.products = state.products.filter(
                (item) => item.id !== action.payload
            );
        },
        resetCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
        incrementQuantity: (state, action) => {
            const item = state.products.find(
                (item) => item.id === action.payload.id
            );
            if(item){
                item.quantity += action.payload.quantity; // Tăng số lượng sản phẩm theo số lượng được chọn
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.products.find(
                (item) => item.id === action.payload.id
            );
            if(item.quantity === 1){
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        // User Start here
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
        // User End here
    },
})

export const { addProduct, resetCart, incrementQuantity, decrementQuantity, deleteItem, addUser, removeUser } = cartSlice.actions;
export default cartSlice.reducer;
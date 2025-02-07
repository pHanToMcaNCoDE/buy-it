import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const savedCart = () => {
    const save = localStorage.getItem('Cart')
    return save ? JSON.parse(save) : []
}

const savedFavourite = () => {
    const savedList = localStorage.getItem('Favourite')
    return savedList ? JSON.parse(savedList) : []
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: savedCart(),
        favouriteList: savedFavourite()
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartList.find(item => item.id === action.payload.id)
            if(!existingItem) {
                state.cartList.push(action.payload)
                localStorage.setItem('Cart', JSON.stringify(state.cartList))
                toast.success('Added To Cart!!')
            }else{
                toast.error('Already in your Cart!!')
            }

        },
        removeFromCart: ((state, action) => {
            state.cartList = state.cartList.filter(item => item.id !== action.payload.id)
            localStorage.setItem('Cart', JSON.stringify(state.cartList))
            toast.success('Removed From Cart!!')
        }),
        addToFavourite: (state, action) => {
            const existingFavourite = state.favouriteList.find(item => item.id === action.payload.id);

            if(!existingFavourite) {
                state.favouriteList.push(action.payload)
                localStorage.setItem('Favourite', JSON.stringify(state.favouriteList))
                toast.success('Added To Favourite!!')
            }else{
                toast.error('Already in your Favourite List!!')
            }
        },
        removeFromfavourite: ((state, action) => {
            state.favouriteList = state.favouriteList.filter(item => item.id !== action.payload.id)
            localStorage.setItem('Favourite', JSON.stringify(state.favouriteList))
            toast.success('Removed From Favourite!!')
        }),
    }
})


export const { addToCart, removeFromCart, addToFavourite, removeFromfavourite } = CartSlice.actions
export default CartSlice.reducer
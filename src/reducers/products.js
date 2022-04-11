import { createSlice } from "@reduxjs/toolkit";

const productData = [
    { id: 1, title: 'Socks', price: 100, emoji: 'JJ' },
    { id: 2, title: 'T-shirt', price: '200', emoji: 'T' },
    { id: 3, title: 'Pants', price: '350', emoji: '^' },
    { id: 4, title: 'Dress', price: '550', emoji: '#' }
]

export const products = createSlice({
    name: 'products' ,
    initialState: productData
})
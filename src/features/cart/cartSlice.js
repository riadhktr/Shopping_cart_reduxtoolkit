import {createSlice} from '@reduxjs/toolkit'
import { prdoucts } from '../../data'

const initialState = {
    produit :prdoucts ,
    amount:0,
    total: 0,
    
}

const cartSlice = createSlice({
name:'cart',
initialState,
reducers:{
clearCart:(state,action)=>{
    state.produit = []
},
removeItem:(state,action)=>{
    const itemId = action.payload;
    state.produit = state.produit.filter((item)=>
    item.id !== itemId)
},
increase:(state,action)=>{
    const cartItem = state.produit.find((item)=>item.id === action.payload)
cartItem.amount = cartItem.amount + 1
},
decrease:(state,{payload})=>{
    const cartItem = state.produit.find((item)=>item.id === payload.id)
cartItem.amount = cartItem.amount - 1
},

calculateTotals:(state,action)=>{
let quantity =0;
let total = 0;
state.produit.forEach((item)=>{
    quantity+= item.amount;
    total+= item.amount * item.price;
});
state.amount = quantity;
state.total = total;
},

filtred: (state,action)=>{
    if(action.payload !== undefined){
        state.produit = state.produit.map(el=> el).filter(item=>item.name ===action.payload)
    }else {
        state.produit = state.produit 
    }

}
}

})


export const {clearCart,removeItem,increase,decrease,calculateTotals,filtred} = cartSlice.actions
export default cartSlice.reducer
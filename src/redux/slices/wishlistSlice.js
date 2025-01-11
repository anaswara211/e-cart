import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: 'wishlists', 
  initialState: [], // Ensures the initial state is an array
  reducers: {
    addToWishlist: (state, actionFromView) => {
      state.push(actionFromView.payload) // Handles adding an item to the wishlist
    },
    removeItem:(state,actionFromWishlist)=>{
       return state.filter(item=>item.id!=actionFromWishlist.payload)
    }
  }
})

export const { addToWishlist,removeItem } = wishlistSlice.actions
export default wishlistSlice.reducer

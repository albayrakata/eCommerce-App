const { createSlice } = require("@reduxjs/toolkit");

const WishListSlice = createSlice({
    name: 'wishlist',
    initialState: {
        data: []
    },
    reducers: {
        addItemToWishList: (state, action) => {
            let tempData = [{ ...action.payload }, ...state.data]
            state.data = tempData
        }
    }
})
export const { addItemToWishList } = WishListSlice.actions
export default WishListSlice.reducer
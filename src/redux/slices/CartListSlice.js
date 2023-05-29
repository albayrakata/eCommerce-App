const { createSlice } = require("@reduxjs/toolkit");

const CartListSlice = createSlice({
    name: 'cart',
    initialState: {
        data: []
    },
    reducers: {
        addItemToCartList: (state, action) => {
            let tempData = state.data
            let isItemExist = false;
            tempData.map(item => {
                if (item.id == action.payload.id) {
                    isItemExist = true;   
                    item.qty = item.qty + 1;
                }
            })
            if (!isItemExist) {
                tempData.push(action.payload)
            }

            state.data = tempData
        }
    }
})
export const { addItemToCartList } = CartListSlice.actions
export default CartListSlice.reducer
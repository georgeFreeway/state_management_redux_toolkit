import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}

const url = 'http://localhost:3000/posts';

export const getCartItems = createAsyncThunk('getCartItems', () => {
    return fetch(url)
        //use implicit return here to return data or else, it would throw a JSON error,
        //stating that body stream has already been read when using setInterval
        .then((res) => res.json())
        .catch((error) => {
            console.log(error);
        });
});

// export const getCartItems2 = createAsyncThunk('getCartItems', async (id, thunkAPI) => {
    
//     try {
//         //assuming a user id is required for a purpose, it would be grabbed here
//         console.log(id);
//         //the thunkAPI makes the asynchronous operation more powerful
//         //we can access the store (state of the application)
//         console.log(thunkAPI);
//         const res = await axios(url);
//         //looking at the res gotten back, there is a need to attach the data property
//         console.log(res);
//         return res.data;
//     }catch (error) {
//        return thunkAPI.rejectWithValue(error.message);
//     }
// });

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearState: (state) => {
            //mutate state directly
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => {
                return item.id !== itemId;
            });
        },
        increaseItem: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => {
                return item.id === payload.id;
            });
            cartItem.amount = cartItem.amount + 1;
        },
        decreaseItem: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => {
                return item.id === payload.id;
            });
            cartItem.amount = cartItem.amount - 1;
        },
        calculate: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems && state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false;
        },
    }
});

// console.log(cartSlice)
export const { clearState, removeItem, increaseItem, decreaseItem, calculate } = cartSlice.actions;
export default cartSlice.reducer;
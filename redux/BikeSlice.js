import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchBike = createAsyncThunk(
    'bikes/fetchBike',
    async () => {
        const res = await fetch('https://67126da56c5f5ced66237d06.mockapi.io/tasks');
        return res.json();
    }
)

export const addBikes = createAsyncThunk(
    'bikes/addBikes',
    async (bikesData) => {
        console.log(bikesData);
        // const res = await axios.post('https://67126da56c5f5ced66237d06.mockapi.io/tasks');
        const res = await axios.post('https://67126da56c5f5ced66237d06.mockapi.io/tasks', {
            name: bikesData.name,
            price: bikesData.price,
            type: bikesData.type,
            image: bikesData.image
        });
        return res.data;
    }
)

const bikeSlice = createSlice({
    name: 'bikes',
    initialState: {
        data: [],
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBike.pending, (state) => {
                console.log("pending");
                state.error = '';
            })

            .addCase(fetchBike.fulfilled, (state, action) => {
                console.log("success");
                state.data = action.payload;
                state.error = '';
            })
            .addCase(fetchBike.rejected, (state, action) => {
                console.log("error");
                state.error = action.error.message;
                // state.data = [];
            })
            .addCase(addBikes.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
    }
})
export default bikeSlice.reducer;
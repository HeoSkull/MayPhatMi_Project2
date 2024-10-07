import { createSlice } from "@reduxjs/toolkit";
import { UserSliceState, fetchUser, updateNoodleCount } from "../action/user.action";

const initialState: UserSliceState = {
    users: [],
    loading: false,
    error: null,
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch users';
            })
            .addCase(updateNoodleCount.pending, () => console.log('Đang update'))
            .addCase(updateNoodleCount.fulfilled, (state, action) => {
                const { userEmail, noodleCount } = action.payload;
                const user = state.users.find(user => user.email === userEmail);
                if (user) {
                    user.noodleCount = noodleCount; // Update noodleCount in state
                }
            })
            .addCase(updateNoodleCount.rejected, ()=> console.log('Update failed!!'))
    },
})

export default userSlice.reducer;
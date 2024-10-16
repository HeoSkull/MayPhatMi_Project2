import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserDetail {
  name?: string;
  birthday?: string;
  gender?: string;
  department?: string;
  noodleCount?: number;
}

interface UserState {
  userDetail: UserDetail;
}

const initialState: UserState = {
  userDetail: {
    name: '',
    birthday: '',
    gender: '',
    department: '',
    noodleCount: 0,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetail(state, action: PayloadAction<UserDetail>) {
      state.userDetail = action.payload;
    },
    setNoodleCount(state, action: PayloadAction<number>) {
      state.userDetail.noodleCount = action.payload;
    },
  },
});

export const { setUserDetail, setNoodleCount } = userSlice.actions;
export default userSlice.reducer;
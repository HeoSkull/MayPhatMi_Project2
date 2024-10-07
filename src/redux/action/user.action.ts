import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs,doc, updateDoc } from "firebase/firestore";
import { db } from "../../db/db";

export interface UserState  {
    id: string,
    email: string,
    birthday: string,
    name: string,
    gender: string,
    department: string,
    noodleCount: number
}

export interface UserSliceState {
    users: UserState[];
    loading: boolean;
    error: string | null;
}

export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'user'));
        const userData: UserState[] = querySnapshot.docs.map(doc => ({
            id: doc.id, // Include the document ID
            ...doc.data() as Omit<UserState, 'id'> // Cast to UserState without id
        }));
        console.log('User data: ', userData)
        return userData;
    }
)

export const updateNoodleCount = createAsyncThunk(
    'users/updateNoodleCount',
    async ({ userEmail, noodleCount }: { userEmail: string; noodleCount: number }) => {
        const userRef = doc(db, 'user', userEmail);
        await updateDoc(userRef, { noodleCount });
        return { userEmail, noodleCount };
    }
)
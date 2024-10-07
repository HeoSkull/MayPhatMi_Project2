import React,{ createContext, useContext, ReactNode, useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { MapDispatch } from "../redux/store";
import { fetchUser, updateNoodleCount } from "../redux/action/user.action";
import NoodleCount from "../screens/information/components/NoodleCount";
 
type UserProps = {
    user: {
        email: string,
        name: string,
        birthday: string,
        gender: string,
        department: string,
        noodleCount: number
    };
    updateUser: React.Dispatch<React.SetStateAction<{
        email: string,
        name: string,
        birthday: string,
        gender: string,
        department: string,
        noodleCount: number
    }>>;
    handleDone: () => Promise<void>;
}

const UserContext = createContext<UserProps | undefined>(undefined);

export const UserProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const dispatch = useDispatch<MapDispatch>();
    const [user, setUser] = useState<UserProps['user']>({
        email: '',
        name: '',
        birthday: '',
        gender: '',
        department: '',
        noodleCount: 3
    });

    useEffect(()=> {
        try {
            dispatch(fetchUser());
        } catch(error) {
            console.log('Error while fetching data: ', error);
        }
    },[dispatch])
    
    const handleDone = async () => {
        try {
            await dispatch(updateNoodleCount(user.email, user.noodleCount).unwarp())
        } catch(error) {
            console.error('Error when updating user: ', error);
            alert('Đã xảy ra lỗi, vui lòng thử lại sau!');
        }
    }

    return (
        <UserContext.Provider value={{ user, updateUser, handleDone }}> {/* Ensure updateUser is included */}
            {children} {/* This should return a valid ReactNode */}
        </UserContext.Provider>
    )
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

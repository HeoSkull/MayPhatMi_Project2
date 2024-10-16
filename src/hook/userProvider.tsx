import React, { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { updateDoc, doc, getDoc } from 'firebase/firestore';

import { setUserDetail, setNoodleCount } from "../redux/reducer/user.slice";
import { StoreState } from "../redux/store";
import { auth,db } from '../../services/db'; 

type UserProps = {
    user: {
        name: string;
        birthday: string;
        gender: string;
        department: string;
        noodleCount: number;
    };
    updateUser: (user: UserProps['user']) => void;
    handleNoodleClick: () => Promise<void>;
    handleLogOut: () => Promise<void>;
};

const UserContext = createContext<UserProps | undefined>(undefined);


export const UserProvider: React.FC<{children: ReactNode}> = ({ children }):JSX.Element => {
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationProp<any>>(); 
    const userDetail = useSelector((state: StoreState) => state.user.userDetail); 

    const [user, setUser] = useState<UserProps['user']>({
        name: userDetail.name || '',
        birthday: userDetail.birthday || '',
        gender: userDetail.gender || '',
        department: userDetail.department || '',
        noodleCount: userDetail.noodleCount || 0, 
    });

    useEffect(() => {
        setUser({
            name: userDetail.name || '',
            birthday: userDetail.birthday || '',
            gender: userDetail.gender || '',
            department: userDetail.department || '',
            noodleCount: userDetail.noodleCount || 0,
        });
    }, [userDetail]);
    
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data() as UserProps['user'];
          dispatch(setUserDetail(userData)) ;
          dispatch(setNoodleCount(userData.noodleCount));
          console.log(userData)
        } else {
          console.log('No document exists');
        }
      } else {
        console.log('No user is logged in');
      }
    });
        return () => unsubscribe();
    }, []);

    const handleNoodleClick = async () => {
        if (user.noodleCount > 0) {
            const newNoodleCount = user.noodleCount - 1; 
            dispatch(setNoodleCount(newNoodleCount)); 

            navigation.navigate('Done'); 
            const currentUser = auth.currentUser; 
            if (currentUser) {
                const docRef = doc(db, 'users', currentUser.uid); 
                await updateDoc(docRef, { noodleCount: newNoodleCount }); 
            }

        } else {
            navigation.navigate('OutOfNoodles'); 
        }
    };
    const handleLogOut = async() => {
        try { 
          await auth.signOut();
          navigation.navigate('Login');
        } catch (error) {
          console.log(error);
          alert(error);
        }
      }

    return (
        <UserContext.Provider value={{ user, updateUser: setUser, handleNoodleClick, handleLogOut }}>
            {children}
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
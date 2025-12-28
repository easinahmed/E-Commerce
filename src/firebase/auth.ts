import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile,
    updatePassword,
    type User
} from "firebase/auth";
import { auth } from "./firebase.config";

export const registerUser = async (email: string, password: string, name: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, {
        displayName: name
    });
    return user;
};

export const loginUser = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};

export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential.user;
};

export const logoutUser = async () => {
    await signOut(auth);
};

export const updateUserProfile = async (user: User, data: { displayName?: string; photoURL?: string }) => {
    await updateProfile(user, data);
    return user;
};

export const updateUserPassword = async (user: User, password: string) => {
    await updatePassword(user, password);
};

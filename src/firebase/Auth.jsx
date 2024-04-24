import { auth } from './Firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword } from 'firebase/auth';
//this is to create a profile
export const doCreateUserWithEmailAndPassword = async (email, password) => {
    if (!email) {
        return { success: false, error: 'Email is required' };
    }
//this will make sure that the email is valid and will not trip auth error
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        return { success: true };
    } catch (error) {
        console.error('Error creating user:', error.message);
        return { success: false, error: error.message };
    }
};

export const doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    //result.user?? HERE TO SAVE USER INFO TO FIRESTONE
    return result;
};

export const doSignOut = () => {
    return auth.signOut();
};


export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
    return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/home`,
    });
};




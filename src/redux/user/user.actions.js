export const signInAction =token=> {
    return {
        type: 'SIGN_IN' ,
        payload: token
    };
}
export const signOutAction =token=> {
    return {
        type: 'SIGN_OUT' ,
    };
}
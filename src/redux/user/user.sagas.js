import {takeLatest, put, all, call} from 'redux-saga/effects';
import UserActionTypes from "./user.types";

import {auth, createUserProfileDocument, googleProvider} from '../../firebase/firebasse.utils'
import {emailSignInFailure, googleSignInFailure, googleSignInSuccess} from "./user.actions";


export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (e) {
        yield put(googleSignInFailure(e))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail() {
    try {
        const user = yield auth.signInWithEmailAndPassword()
    } catch (e) {
    yield put(emailSignInFailure(e))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}

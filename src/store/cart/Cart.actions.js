import { createAsyncThunk } from '@reduxjs/toolkit';
import { database, auth } from '../../Firebase';
import { ref, get, child } from 'firebase/database';

export const loadCart = createAsyncThunk(
    'cart/loadCart',
    async(uid, thunkAPI) => {
        try {
            const snapshot = await get(child(ref(database), `carts/${auth.currentUser.uid}`));
            let response = {};
            if(snapshot.exists()){
                let c = snapshot.val();
                if(c) {
                    response = c;
                }
            } 
            return response
        } catch(err) {
            throw err;
        }
    }
);


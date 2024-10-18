import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_API = "http://localhost:3001/api/v1";


// Thunk pour l'appel API du profile
export const profileUser = createAsyncThunk(
    'profile/profileUser',
    async ({ firstName, lastName }, {
        rejectWithValue
    }) => {
        try {
            // Vérifiez que la fonction est bien appelée
            // Récupérer le token de l'utilisateur à partir du localStorage
            const token = sessionStorage.getItem('userToken') || localStorage.getItem('userToken');
            // if (!token) throw new Error('Utilisateur non authentifié');
            if (!token) {
                throw new Error('Utilisateur non authentifié');
            }
            // Requête GET pour récupérer les informations de l'utilisateur
            const response = await axios.post(`${URL_API}/user/profile`, { firstName, lastName }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            return response?.data?.body; // Retourne les données du profil de l'utilisateur
        }
        catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

const initialState = {
    firstName: '',
    lastName: '',
    loading: false,
    error: null,
};


const profileSlice = createSlice({
    name: 'profile',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(profileUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(profileUser.fulfilled, (state, action) => {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.loading = false;
                state.error = null;
            })
            .addCase(profileUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },

})

export default profileSlice.reducer;
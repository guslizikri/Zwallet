import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  email: '',
  username: '',
  balance: 0,
  image: '',
  phone: '',
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileDetails(state, action) {
      const { id, email, username, balance, image, phone, pin } = action.payload
      state.id = id
      state.email = email
      state.username = username
      state.balance = balance
      state.image = image
      state.phone = phone
      state.pin = pin
    },
    resetProfileDetails(state) {
      state.id = null
      state.email = ''
      state.username = ''
      state.balance = 0
      state.image = ''
      state.phone = ''
      state.pin = ''
    },
  },
})

export const { setProfileDetails, resetProfileDetails } = profileSlice.actions
export default profileSlice.reducer

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Users {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Orders {
  id?: number;
  userName: string;
  itemCount: number;
  address: string;
}

interface UserOrders {
  users: Array<Users>;
  orders: Array<Orders>;
}

const initialState: UserOrders = {
  orders: [],
  users: []
}

const UserOrder2 = createSlice({
  name: 'userOrder',
  initialState,
  reducers: {
    addUser: (state, actions: PayloadAction<Users>) => {
      state.users.push(actions.payload);
    }
  }
})

export const {addUser} = UserOrder2.actions;

export const getUsers = (state: RootState) => state.userOrders.users;

export default UserOrder2.reducer;
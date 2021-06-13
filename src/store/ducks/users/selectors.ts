import {UsersState} from "./contracts/state";
import {RootState} from "../../store";

export const selectUsers = (state: RootState): UsersState => state.users;
export const selectUsersItems = (state: RootState): UsersState['items'] => state.users.items;

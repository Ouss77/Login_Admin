import { createSlice} from '@reduxjs/toolkit'
import { userList } from './Data'


const userSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers:{
        addUser: (state, action) =>{
            console.log(action);
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            return state.map(user => {
              if (user.id === id) {
                return { ...user, name, email };
              }
              return user;
            });
          },
          deleteUser: (state, action) => {
            const { id } = action.payload;
            const uu = state.find(user => user.id == id)
            if(uu){
                return state.filter(user => user.id !== id);

            }           
          }
          
          
          
        // updateUser: (state, action) =>{
        //     const {id, name, email} = action.payload;
        //     const uu = state.find(user => user.id == id);
        //     if (uu){
        //         uu.name = name;
        //         uu.email = email
        //     }
        // }
          
    }
})


export const {addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer
import {createStore} from "redux";

const store = createStore(function (state,action){
   if(action.type === "edit-curr"){

    return {
        ...state,
        currentUser:{
            name: action.payload.name
        }
    }
   }
   return state;
},{
        currentUser:{
            name:"Tigran"
        }
    }
)

export default store

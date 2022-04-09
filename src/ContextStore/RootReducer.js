import { ManageLocalStorage } from "../Utils/ManageLocalStorage"


const rootReducer = (state , action = {}) => {
    if(action.type==='logout'){
        return {...state,
            loginState: {
              userDetails: {},
              isLoggedIn: false,
            }
          }
    }
    if(action.type==='login'){
        return {...state,
            loginState: {
              userDetails: action.payload,
              isLoggedIn: true,
            }
          }
    }
    if(action.type==='updateTodo'){
        ManageLocalStorage.set('userDetails',{...state.loginState.userDetails,todos: action.payload})
        return {...state,
            loginState: {
              userDetails: {...state.loginState.userDetails,todos: action.payload},
              isLoggedIn: true,
            }
          }
    }
    if(action.type==='updatePets'){
      ManageLocalStorage.set('petsList',action.payload)
      return {...state,
        petsList: action.payload
        }
  }
  if(action.type==='loader'){
    return {...state,
      isLoading: action.payload
      }
}
    return { ...state };
}
    export default rootReducer;
import {AddVEG,INCVEG,DECVEG} from '../../action/vegetable'
const initialState={
    addData: [],
}

function addVeg(state, action) {
    let temp={}
    temp.name=action.itemName;
    temp.amount=action.itemAmount;
    temp.qty=action.quantity;
    temp.originalprice=parseInt(action.itemAmount);
    return {
        ...state,
        addData: [...state.addData,temp]

    }
}
export function vendor(state=initialState,action){
    switch(action.type){
        case AddVEG: return addVeg(state, action)
         case INCVEG:
         {
             let index=action.index;
             let newState=Array.from(state.addData);
             newState[index].qty+=1;
             newState[index].amount=parseInt(newState[index].originalprice)*parseInt(newState[index].qty);
             return {
                 ...state,
                 addData: newState
             }
         }
            case DECVEG:
            {
                let index=action.index;
                let newState=Array.from(state.addData)
                if(newState[index].qty-1===0){
                  newState.splice(index,1)
                }else {
                    newState[index].qty -= 1;
                    newState[index].amount = parseInt(newState[index].originalprice) * parseInt(newState[index].qty);
                }
                return {
                    ...state,
                    addData: newState
                }
            }
        default:
        {
            return state
        }
    }
}
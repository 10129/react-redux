import { USER_NAME_CHANGE_TYPE ,PASSWORD_CHANGE_INPUT_TYPE,HANDLE_ITEM_DELETE_TYPE,ADD_ITEM_TYPE} from './actionTypes';
const defaultState={
    userName:'',
    passWord:'',
      list:[]
}
export default (state =defaultState,action)=>{
    if(action.type === USER_NAME_CHANGE_TYPE){
        const newState=JSON.parse(JSON.stringify(state));
        newState.userName=action.value;
        return newState;
    }
    if(action.type === PASSWORD_CHANGE_INPUT_TYPE){
        const newState=JSON.parse(JSON.stringify(state));
        newState.passWord=action.value;
        return newState;
    }  
    if(action.type === ADD_ITEM_TYPE){
        const newState=JSON.parse(JSON.stringify(state));
        console.log('add userName:'+newState.userName);
        newState.list.push(newState.userName);
        newState.userName='';
        return newState;
    }
    if(action.type === HANDLE_ITEM_DELETE_TYPE){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        console.log('delete:'+action.index);
        return newState;
    }        
     
    return state;
}
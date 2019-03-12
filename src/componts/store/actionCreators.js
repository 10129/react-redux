import { USER_NAME_CHANGE_TYPE,PASSWORD_CHANGE_INPUT_TYPE ,HANDLE_ITEM_DELETE_TYPE,ADD_ITEM_TYPE} from './actionTypes';

export const  getUserNameChange = (value) => ({
    type: USER_NAME_CHANGE_TYPE,
    value
  });
export const  getPassWordChange = (value) => ({
      type: PASSWORD_CHANGE_INPUT_TYPE,
      value
    });
    export const  getItem = () => ({
      type: ADD_ITEM_TYPE
    });
    export const  getHandleItemDelete = (index) => ({
      type: HANDLE_ITEM_DELETE_TYPE,
      index
    });
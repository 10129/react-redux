var storage={
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value));  //存入
    },
    get(key){
        return JSON.parse(localStorage.getItem(key));  //取出
    },remove(key){
        localStorage.removeItem(key);                          //移除
    }
};
export default storage;
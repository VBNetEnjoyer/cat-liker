export default(()=>{
    const KEY_FOR_LOCAL_STORAGE = "CAT_LIKER";

    let data = new Array(0);
    if(localStorage.getItem(KEY_FOR_LOCAL_STORAGE)){
        data = JSON.parse(localStorage.getItem(KEY_FOR_LOCAL_STORAGE));
    }

    function getData(){
        return data;
    }

    function addItem(item){
        data.push(item);
        updateLocalStorage();
    }

    function deleteItem(item){
        data = data.filter(element => element.id !== item.id);
        updateLocalStorage();
    }

    function updateLocalStorage(){
        localStorage.setItem(KEY_FOR_LOCAL_STORAGE,
            JSON.stringify(data));
    }

    return{
        getData,
        addItem,
        deleteItem,
    }
})();
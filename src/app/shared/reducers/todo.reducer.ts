

export const todosReducer = (state=[],action)=>{
    switch(action.type){
        case "add":
            return [
                ...state,
                action.payload
            ] ;
        case "remove":
            return ;
        default:
            return state;
    }
}
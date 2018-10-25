import actions from './actions';

const initState = {
    text:'',
    dat:[],
    data:'',
}

export default function reducer(state =  initState, action){
switch (action.type) {
    case actions.INSERT_DATA:    
        return{
            ...state,
            dat:action.payload.text
        };
    case actions.GET_VALUE:
        return{
            ...state,
            text:action.payload.text
        };
    case actions.DELETE_DATA:
        return{
            ...state,
            text:action.payload.id
        };
    case actions.COMPLETE:
        return{
            ...state,
            text:action.payload.id
        };
    case actions.EDIT:
    console.log(action.payload.txt)
        return{
            ...state,
            text:action.payload.txt
        };
    case actions.INSERT_DATA_S:      
    return{
            ...state,
            data:action.payload.data
        };
    default:
    return state;
}
}
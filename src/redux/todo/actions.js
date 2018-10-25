const actions = {
INSERT_DATA : 'INSERT_DATA',
INSERT_DATA_S:'INSERT_DATA_S',
GET_VALUE:'GET_VALUE',
FETCH_DATA:'FETCH_DATA',
DELETE_DATA:'DELETE_DATA',
COMPLETE:'COMPLETE',
EDIT:'EDIT',
TOGGLE_EDIT:'TOGGLE_EDIT',
UPDATE:'UPDATE',


insertData:(text)=>({
    type:actions.INSERT_DATA,
    payload:{text}
}),
getMyValue:(text)=>({
    type:actions.GET_VALUE,
    payload:{text}
}),
insertSuccess:(data)=>({
    type:actions.INSERT_DATA_S,
    payload:{data}
}),
fetchData:()=>({
    type:actions.FETCH_DATA,
}),
deleteData:(id)=>({
    type:actions.DELETE_DATA,
    payload:{id}
}),
completeData:(id,status)=>({
    type:actions.COMPLETE,
    payload:{id,status}
}),
editData:(id,txt)=>({
    type:actions.EDIT,
    payload:{id,txt}
}),
updateData:(id,text)=>({
    type:actions.UPDATE,
    payload:{id,text}
}),


};
export default actions;
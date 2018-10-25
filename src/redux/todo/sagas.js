import { all, takeEvery, put, call } from 'redux-saga/effects';
import actions from './actions'
import fireBase from '../../fireBase';

var db = fireBase.firestore();
var localData = []


function* insertData({ payload }) {
    const { text } = payload;
    try {
        if(text){
        localData.push(text)
        db.collection('reduxTodo').add({data:text,status:false}).then(function (docRef) {
            db.collection('reduxTodo').doc(docRef.id).update({
              id: docRef.id
            })
          }).then(function () {
            console.log('insert successfull')
          }).catch(function (error) {
            console.error("Error adding document: ", error);
          });
            //    yield put(actions.insertSuccess(localData))
               yield put(actions.getMyValue(''))
        }
    } catch (error) {
       console.log(error)
    }
}

const onRetriveData = async() => {
    var arrData  = [];
    localData = [];
      await  db.collection('reduxTodo').orderBy("data", "asc").get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) =>  {
                   localData.push( doc.data() )
                });
            });
    }
function* fetchData(){
    yield call(onRetriveData);   
    yield put(actions.insertSuccess(localData))    
}

const onDeleteData = async(id) => {
    var arrData  = [];
    localData = [];
      await  db.collection('reduxTodo').doc(id).delete().then(function () {
        
      }).catch(function (error) {
        console.error("Error adding document: ", error);
      });
    }
function* deleteData({payload}){
    const { id } = payload;
    try {
        yield call(onDeleteData,id);   
    yield put(actions.insertSuccess(localData)) 
        
    } catch (error) {
        
    }
       
}

const onCompleteData = async(id,status) => {
    var mystatus;
    localData = [];
    (status?mystatus=false:mystatus=true)
      await  db.collection('reduxTodo').doc(id).update({  
        status: mystatus
      }).then(function () {
        
      }).catch(function (error) {
        console.error("Error adding document: ", error);
      });
    }
function* completeData({payload}){
    const { id,status } = payload;
    try {
        yield call(onCompleteData,id,status);   
    yield put(actions.insertSuccess(localData)) 
        
    } catch (error) {
        
    }
       
}
 
function* editData({payload}){
    const { id,txt } = payload;
    try {
        // yield call(onEditData,id,txt);   
    yield put(actions.insertSuccess(localData)) 
        
    } catch (error) {
        
    }
       
}
const onUpdateData = async(id,text) => {
    var mystatus;
    localData = [];
      await  db.collection('reduxTodo').doc(id).update({  
        data: text
      }).then(function () {
        
      }).catch(function (error) {
        console.error("Error adding document: ", error);
      });
    }
function* updateData({payload}){
    const { id,text } = payload;
    console.log('id',id,'text',text)
    try {
        yield call(onUpdateData,id,text);           
    } catch (error) {
        
    }
       
}


export default function* rootSaga() {
    yield all([takeEvery(actions.INSERT_DATA,insertData)]);
    yield all([takeEvery(actions.FETCH_DATA,fetchData)]);
    yield all([takeEvery(actions.DELETE_DATA,deleteData)]);
    yield all([takeEvery(actions.COMPLETE,completeData)]);
    yield all([takeEvery(actions.EDIT,editData)]);
    yield all([takeEvery(actions.UPDATE,updateData)]);
}
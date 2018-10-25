import React, { Component } from 'react';
import actions from '../redux/todo/actions';
import { connect } from 'react-redux';
import TodoInput from './components/todoInput'
import { Input, Button, Badge,  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const { insertData, getMyValue, fetchData, deleteData, completeData, editData,updateData } = actions;
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            id:'',
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
        console.log(this.state.modal)
      }

    componentWillMount() {
        this.props.fetchData();
    }

    componentWillReceiveProps() {
        this.props.fetchData();
    }


    clear() {
        document.getElementById("txt").value = '';
    }

    render() {
        const { text, data, dat } = this.props.TodoState;
        let my;
        if (data.length > 0) {
            my = data.map(x => {
                return (<div key={x.id}>
                    {x.status ? <s><li id={x.id}>{x.data}</li></s> : <li id={x.id}>{x.data}</li>}
                    <Badge href='#' color="success" onClick={() => this.props.completeData(x.id, x.status)}>Complted</Badge>
                    <Badge href='#' color="danger" onClick={() => this.props.deleteData(x.id)} >Delete</Badge>
                    <Button color="warning" onClick={()=> {this.setState({id:x.id});this.toggle();this.props.editData(x.id,x.data); } }>Edit</Button>
                </div>)
            })
        }
        return (
            <div >
                {this.state.modal?<div className='row container' style={{width:'250px'}}>
                        <Input id='txt' className="col-4" type='text' value={text} onChange={(e) => this.props.getMyValue(e.target.value)} required />
                        <Button className="col-2" color="primary" onClick={(e) => { this.props.updateData(this.state.id,text);this.toggle();this.clear() }}>update</Button>
                    </div>:""}
                <div className='container'>
                    <div className='row'>
                        <Input id='txt' className="col-10" type='text' onChange={(e) => this.props.getMyValue(e.target.value)} required />
                        <Button className="col-2" color="primary" onClick={(e) => { this.props.insertData(text); this.clear() }}>primary</Button>
                    </div>
                    <ol>
                        {my}
                    </ol>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { TodoState: state.TodoReducers, };
}
export default connect(
    mapStateToProps,
    { insertData, getMyValue, fetchData, deleteData, completeData, editData,updateData }
)(Todo);
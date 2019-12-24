import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux'
import { SETINPUT, EDIT } from '../Action';

 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
 class Modall extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <span className=''>
        <button 
        className='btn btn-success m-2'
        onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button 
          className='btn btn-info m-2'
          onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input 
            style={{width:'400px'}}
            placeholder={this.props.Task.text}
            onChange={ (event)=> this.props.handelInput(event.target.value)} // payload
            />
            
            <button
            className='btn btn-info m-2'
            type='button'
            onClick={ () =>  { this.props.handelEdit ({id:this.props.Task.id,text:this.props.text}) ;  this.closeModal()} } //text
            >Modifier</button>
          </form>
        </Modal>
      </span>
    );
  }
}
const mapStateTProps = state =>{
  return {
    text:state.input
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handelInput: payload => dispatch(SETINPUT(payload)), // text
    handelEdit: payload => dispatch(EDIT(payload)) // text
  }
}
const  ModallContainer = connect(mapStateTProps,mapDispatchToProps) (Modall)
export default ModallContainer
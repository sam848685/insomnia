import React, {Component, PropTypes} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from './Modal'

class PromptModal extends Component {
  _onSubmit (e) {
    e.preventDefault();

    this.props.onSubmit(this.refs.input.value);
    this.refs.modal.close();
  }

  _setDefaultValueFromProps () {
    if (this.props.defaultValue) {
      this.refs.input.value = this.props.defaultValue;
    }

    this.refs.input.focus();
    this.refs.input.select();
  }

  componentDidMount () {
    this._setDefaultValueFromProps();
  }

  componentDidUpdate () {
    this._setDefaultValueFromProps();
  }

  render () {
    const {onClose, submitName, headerName} = this.props;
    return (
      <Modal ref="modal" onClose={onClose}>
        <ModalHeader>{headerName}</ModalHeader>
        <ModalBody className="wide">
          <form onSubmit={this._onSubmit.bind(this)} className="wide">
            <div className="form-control form-control--outlined">
              <input ref="input" type="text"/>
            </div>
          </form>
        </ModalBody>
        <ModalFooter className="grid grid--end">
          <button className="btn" onClick={() => this.refs.modal.close()}>Cancel</button>
          <button className="btn" onClick={this._onSubmit.bind(this)}>
            {submitName || 'Save'}
          </button>
        </ModalFooter>
      </Modal>
    )
  }
}

PromptModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  headerName: PropTypes.string.isRequired,

  defaultValue: PropTypes.string,
  submitName: PropTypes.string,
  onClose: PropTypes.func
};

export default PromptModal;
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMessages } from '../actions';

/**
 * the InputBar component is called within the MiddlePageChat container
 * and it enables the call center use to type and send a message to a customer
 */

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      message: event.target.value,
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (!this.state.message) {
      alert('Enter a message!');
    } else {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/api/send', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({
        message: this.state.message,
        to: this.props.activeUser,
      }));

      this.setState({
        message: '',
      });
    }
  }


  render() {
    const { formStyle, inputStyle, buttonStyle } = styles;
    return (
      <form style={formStyle} onSubmit={this.onFormSubmit}>
        <input
          style={inputStyle}
          placeholder="Type a message..."
          className="submit-message-bar"
          type="text"
          value={this.state.message}
          onChange={this.onInputChange}
        />
        <RaisedButton
          label="Send"
          primary
          className="send-button"
          onClick={this.onFormSubmit}
          style={buttonStyle}
        />
      </form>
    );
  }
}
const styles = {
  formStyle: {
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    bottom: 0,
    padding: 5,
  },
  inputStyle: {
    border: 'none',
    width: '100%',
    boxShadow: 'inset 0px 0px 2px #95979b',
    fontWeight: 100,
    fontSize: '15px',
    fontFamily: 'Roboto, sans-serif',
    order: 0,
  },
  buttonStyle: {
    position: 'relative',
    order: 1,
  },
};
InputBar.propTypes = {
  activeUser: PropTypes.string,
};

InputBar.defaultProps = {
  activeUser: '',
};

function mapStateToProps(state) {
  return {
    activeUser: state.center.activeUser,
  };
}
export default connect(mapStateToProps, { sendMessages })(InputBar);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { selectUser } from '../actions/index';

const muiTheme = getMuiTheme();

class LeftPageList extends Component {
  renderList() {
    return this.props.users.map(user => (
      <ListItem
        leftAvatar={
          <Avatar
            src={user.image}
            size={30}
          />
        }
        key={user.username}
        primaryText={user.username}
        secondaryText={user.message[0]}
        secondaryTextLines={2}
        onClick={() => this.props.selectUser(user)}
      />
    ));
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Paper>
          <List>
            {this.renderList()}
          </List>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

LeftPageList.PropTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })).isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPageList);

 /* class LeftPageList extends Component {
  render() {
    return <input />;
  }
}

export default LeftPageList; */

import React, { Component } from 'react';
import HeaderComponent from '../../commons/headerComponent';
import { connect } from 'react-redux';

import { employeesListAction, searchEmployeeAction } from '../../../actions/adminActions';
import EmployeesListView from './employeesListView';
//import { getCookie } from '../../../utils/cookies';

var user = null;

class EmployeesListComponent extends Component {
  
  state = {
    employees: undefined,
    search: '',
    data: {
      id: JSON.parse(localStorage.getItem('user')).id,
      access: JSON.parse(localStorage.getItem('user')).role,
      order: 'desc',
      sortBy: 'username'
    }
  }

  constructor(props) {
    super(props);
  
    user = JSON.parse(localStorage.getItem('user'));
    
    this.setState({
        data: {
          id: user.id,
          access: user.id
    }});

    this.props.dispatch(employeesListAction(this.state.data));
  }

  handleOnChange = (event) => {
    if (event.target.value.length > 1) {
      this.setState({ search: event.target.value });

      this.props.dispatch(searchEmployeeAction({
        search: event.target.value,
        access: user.role,
        id: user.id
      }));
    } else {
      this.setState({ search: '' });
    }
  }

  onSortHandle = (event) => {
    event.preventDefault();
    
    const sortBy = event.target.innerHTML.toLowerCase();

    if (this.state.data.order === 'asc') {
      this.setState({
        data: {
          id: user.id,
          access: user.role,
          order: 'desc',
          sortBy: sortBy
        }
      });
    } else {
      this.setState({
        data: {
          id: user.id,
          access: user.role,
          order: 'asc',
          sortBy: sortBy
        }
      });
    }

    this.props.dispatch(employeesListAction(this.state.data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.response.search.hasOwnProperty('term')) {
      if (nextProps.response.search.term.length > 0 && prevState.search.length > 0) {
        return {
          employees: nextProps.response.search.term
        };
      } else {
        return {
          employees: nextProps.response.list.response
        };
      }
    } else {
      return {
        employees: nextProps.response.list.response
      };
    }
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <EmployeesListView
          list={this.state.employees}
          handleOnChange={this.handleOnChange.bind(this)}
          onSortHandle={this.onSortHandle.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state
});

export default connect(mapStateToProps)(EmployeesListComponent);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Table} from 'semantic-ui-react';

import {getUsersSaga} from '../../actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        }
    }


    render() {
        return (
            <div>
                DetailsPage
                <div>{this.state.id}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.usersReducer.users
});

const mapDispatchToProps = dispatch => ({
    getUsersSaga: () => dispatch(getUsersSaga())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

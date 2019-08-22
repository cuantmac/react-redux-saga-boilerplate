import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Table} from 'semantic-ui-react';

import {getDetail} from '../../actions';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        };
    }

    componentWillMount() {
        this.props.getDetail();
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
    getDetail: () => dispatch(getDetail())
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);

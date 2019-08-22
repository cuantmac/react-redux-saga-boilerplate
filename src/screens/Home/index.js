import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, ButtonToolbar, Table} from 'react-bootstrap';

import {getUsersSaga} from '../../actions';
import './style.css'

class Home extends Component {
    constructor() {
        super();
    }

    handleCreate() {
        this.props.history.push("/create");
    }

    handleBtnOnClick() {
        this.props.getUsersSaga();
    }

    handleGoToDetailPage(id) {
        this.props.history.push("/detail/" + id);
    }

    handleDelete(id) {
        console.log('delete', id);
    }


    render() {
        const {users} = this.props;
        return (
            <div className='container'>
                {users.length > 0
                && (
                    <div>
                        <Button variant="primary" onClick={this.handleCreate.bind(this)}>
                            Create New
                        </Button>
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Model</th>
                            <th>Manufacture Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(({
                                        id,
                                        model,
                                        manufactureDate
                                    }, i) => (
                                        <tr key={i}>
                                            <td>{id}</td>
                                            <td>{model}</td>
                                            <td>{manufactureDate}</td>
                                            <td>
                                                <Button variant="primary" onClick={this.handleGoToDetailPage.bind(this,id)}>
                                                    Details
                                                </Button>

                                                <Button variant="primary" className='delete_btn' onClick={this.handleDelete.bind(this,id)}>
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                        ))}
                        </tbody>
                    </Table>

                    </div>
                )
                }
                <ButtonToolbar>
                    <Button variant="primary" onClick={this.handleBtnOnClick.bind(this)}>
                        Load Users
                    </Button>
                </ButtonToolbar>
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

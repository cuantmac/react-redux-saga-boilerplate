import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, ButtonToolbar, Table, Modal} from 'react-bootstrap';

import {getUsersSaga} from '../../actions';
import './style.css'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            modalShow: false,
            id: ''
        }
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
        this.setState({
            modalShow: true,
            id: id
        })
    }

    handleModalClose() {
        this.setState({
            modalShow: false
        });
    }

    handleModalDelete() {
        this.setState({
            modalShow: false
        })
        console.log('098', this.state.id);
        this.props.getUsersSaga();
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

                        <Modal show={this.state.modalShow}>
                            <Modal.Header>
                                <Modal.Title>Be careful!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Are you sure to delete this item?</Modal.Body>
                            <Modal.Footer>
                                <div className='modalFooterBtn'>
                                    <Button variant="primary" onClick={this.handleModalClose.bind(this)}>
                                        Close
                                    </Button>
                                    <Button className='modalFooterBtn_secondbtn' variant="primary" onClick={this.handleModalDelete.bind(this)}>
                                        Yes
                                    </Button>
                                </div>

                            </Modal.Footer>
                        </Modal>

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

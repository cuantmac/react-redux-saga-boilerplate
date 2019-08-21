import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Table} from 'semantic-ui-react';

import {getUsersSaga} from '../../actions';

import styles from './styles';

class Home extends Component {
    constructor() {
        super();
    }

    handleBtnOnClick() {
        this.props.getUsersSaga();
    }

    handleGoToDetailPage(id) {
        console.log('detail', id);
        this.props.history.push("/detail/" + id);
    }

    handleDelete(id) {
        console.log('delete', id);
    }


    render() {
        let centerClass = 'center';
        const {users} = this.props;
        return (
            <div style={styles.container}>
                {users.length > 0
                && (
                    <Table
                        striped
                    >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Id</Table.HeaderCell>
                                <Table.HeaderCell>Model</Table.HeaderCell>
                                <Table.HeaderCell>Manufacture Date</Table.HeaderCell>
                                <Table.HeaderCell className={centerClass}>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {users.map(({
                                            id,
                                            model,
                                            manufactureDate
                                        }, i) => (
                                <Table.Row key={i}>
                                    <Table.Cell>{id}</Table.Cell>
                                    <Table.Cell>{model}</Table.Cell>
                                    <Table.Cell>{manufactureDate}</Table.Cell>
                                    <Table.Cell className={centerClass}>
                                        <Button color="teal" onClick={this.handleGoToDetailPage.bind(this, id)}>
                                            Details
                                        </Button>
                                        <Button color="teal" onClick={this.handleDelete.bind(this, id)}>
                                            Delete
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>))}
                        </Table.Body>
                    </Table>
                )
                }
                <Button color="teal" onClick={this.handleBtnOnClick.bind(this)}>
                    Load Users
                </Button>
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

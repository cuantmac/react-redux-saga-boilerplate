import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDetail, modifyItem} from '../../actions';
import {Col, Form, Button} from "react-bootstrap";
import DatePicker from "react-datepicker";
import moment from 'moment';

import './style.css';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            model: '',
            brand: '',
            weight: '',
            selectDate: new Date(),
            manufactureDate: moment(new Date()).format('YYYY-MM-DD')
        };
    }

    componentDidMount() {
        this.props.getDetail(this.state.id);
        setTimeout(() => {
            this.setState({
                id: this.props.users.id,
                model: this.props.users.model,
                brand: this.props.users.brand,
                weight: this.props.users.weight,
                selectDate: moment(this.props.users.manufactureDate).toDate(),
            })
        },800)
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    handleChangeDate(date) {
        this.setState({
            selectDate: date,
            manufactureDate: moment(date).format('YYYY-MM-DD')
        });
    }

    handleSave(event) {
        event.preventDefault();
        this.props.modifyItem(this.state.id, this.state);
    }

    handleGoBack(event) {
        event.preventDefault();
        this.props.history.goBack();
    }



    render() {
        const {users} = this.props;
        return (
            <div className='container'>
                {Object.keys(users).length > 0
                && (
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Id</Form.Label>
                            <Form.Control name='id' type="text" value={this.state.id} onChange={this.handleChange.bind(this)} disabled/>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Model</Form.Label>
                            <Form.Control name='model' type="text" value={this.state.model} onChange={this.handleChange.bind(this)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control as="select" name='brand' value={this.state.brand} onChange={this.handleChange.bind(this)}>
                                <option>LAMBDA</option>
                                <option>JANUS</option>
                                <option>Wizard</option>
                                <option>Quantum</option>
                                <option>Clarus</option>
                                <option>explorer</option>
                                <option>Thermal</option>
                                <option>Operetta CLS</option>
                                <option>AutoDELFIA</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Weight</Form.Label>
                            <Form.Control name='weight' type="text" value={this.state.weight} onChange={this.handleChange.bind(this)}/>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Manufacture Date</Form.Label>
                            <div className='form-control'>
                                <DatePicker
                                    selected={this.state.selectDate}
                                    onChange={this.handleChangeDate.bind(this)}
                                    dateFormat="yyyy-MM-dd"
                                />
                            </div>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit" onClick={this.handleSave.bind(this)}>
                        Save
                    </Button>
                    <Button variant="primary" type="submit" className='modalFooterBtn_secondbtn' onClick={this.handleGoBack.bind(this)}>
                        GoBack
                    </Button>
                </Form>
                )}
            </div>
        );
    }

}



const mapStateToProps = state => ({
    users: state.usersReducer.users
});

const mapDispatchToProps = dispatch => ({
    getDetail: (id) => dispatch(getDetail(id)),
    modifyItem: (id, data) => dispatch(modifyItem(id, data)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Details);

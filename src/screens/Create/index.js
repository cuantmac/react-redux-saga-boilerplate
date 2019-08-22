import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import moment from 'moment';
import {getDetail} from '../../actions';

import './style.css';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: '',
            brand: '',
            weight: '',
            manufactureDate: new Date()
        }
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
            manufactureDate: date
        });
    }

    handleSave(event) {
        event.preventDefault();
        console.log('345');
        console.log(this.state);
    }


    render() {
        return (
            <div className='container'>

                <Form>
                    <Form.Row>
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
                                    selected={this.state.manufactureDate}
                                    onChange={this.handleChangeDate.bind(this)}
                                    dateFormat="yyyy-MM-dd"
                                />
                            </div>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit" onClick={this.handleSave.bind(this)}>
                        Save
                    </Button>
                </Form>

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

export default connect(mapStateToProps, mapDispatchToProps)(Create);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Button, Col, Modal} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import moment from 'moment';
import {saveCreate} from '../../actions';

import './style.css';
// import Modal from "react-bootstrap/es/Modal";

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: '',
            brand: '',
            weight: '',
            selectDate: new Date(),
            manufactureDate: moment(new Date()).format('YYYY-MM-DD'),
            modalShow: false
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
            selectDate: date,
            manufactureDate: moment(date).format('YYYY-MM-DD')
        });
    }

    handleSave(event) {
        event.preventDefault();
        this.props.saveCreate(this.state);
        console.log('111333', state.saveNewDataReducer.res);
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
                </Form>

                <Modal show={this.state.modalShow}>
                    <Modal.Header>
                        <Modal.Title>Be careful!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure to delete this item?</Modal.Body>
                    <Modal.Footer>
                        <div className='modalFooterBtn'>
                            <Button variant="primary">
                                Close
                            </Button>
                            <Button className='modalFooterBtn_secondbtn' variant="primary">
                                Yes
                            </Button>
                        </div>

                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}



const mapStateToProps = state => ({
    res: state.saveNewDataReducer.res
});

const mapDispatchToProps = (dispatch) => ({
    saveCreate: (data) => dispatch(saveCreate(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);

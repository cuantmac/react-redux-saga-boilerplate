import React, {Component} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import { DateInput } from 'semantic-ui-calendar-react';
import {getDetail} from '../../actions';

import styles from './styles';

const options = [
    { key: 'l', label: 'LAMBDA', value: 'LAMBDA' },
    { key: 'j', label: 'JANUS', value: 'JANUS' },
    { key: 'w', label: 'Wizard', value: 'Wizard' },
    { key: 'q', label: 'Quantum', value: 'Quantum' },
    { key: 'c', label: 'Clarus', value: 'Clarus' },
    { key: 'e', label: 'explorer', value: 'explorer' },
    { key: 't', label: 'Thermal', value: 'Thermal' },
    { key: 'o', label: 'Operetta CLS', value: 'Operetta CLS' },
    { key: 'a', label: 'AutoDELFIA', value: 'AutoDELFIA' },
]

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: '',
            brand: null,
            weight: '',
            manufactureDate: ''
        }

    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    handleChangeSelect = selectedOption => {
        this.setState({
            brand: selectedOption.value
        });
    };

    handleChangeDate = (event, {name, value}) => {
        this.setState({ [name]: value });
    }

    handleCreateNew() {
        console.log('345');
        console.log(this.state);
    }


    render() {
        const { selectedOption } = this.state;
        return (
            <div style={styles.container}>
                <div className="ui mini form">
                    <div className="four fields">
                        <div className="field">
                            <label>Model</label>
                            <input name='model' value={this.state.model} onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className="field">
                            <label>Brand</label>
                            <Select options={options} value={selectedOption} onChange={this.handleChangeSelect}/>
                        </div>
                        <div className="field">
                            <label>Weight</label>
                            <input name='weight' value={this.state.weight} onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className="field">
                            <label>Manufacture Date</label>
                            <DateInput name="date" value={this.state.manufactureDate} iconPosition="left" onChange={this.handleChangeDate}/>
                        </div>
                    </div>
                    <div className="ui submit button" onClick={this.handleCreateNew.bind(this)}>Save</div>
                </div>

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

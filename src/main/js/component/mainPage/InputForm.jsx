import React from "react";
import belle from 'belle';

export default class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            x: '',
            y: '',
            r: '',
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        const point = {
            x: event.target.x,
            y: event.target.y,
            r: event.target.r
        };
        console.log("send");
        console.log(point);
        this.props.addPoint(point);
        event.target.reset();
    }

    handleChange({value}, min, max, key) {
        value = value.replace(',', '.');
        if (isNaN(value)) {
            this.props.setError('Значение должно быть числом!');
            this.setState({key: ''});
        } else if (!(min < Number(value.substr(0, 10)) && Number(value.substr(0, 10)) < max)) {
            this.props.setError(`Число должно быть в диапазоне (${min};${max})`);
            this.setState({key: ''});
        } else {
            this.props.setError('');
            this.setState({key: value});
            if (key === 'r') {
                this.props.changeRadius(value);
            }
        }
        console.log("formState");
        console.log(this.state);
    }

    render() {
        const TextInput = belle.TextInput;
        return <form id="inputForm" className="inputForm" onSubmit={this.handleSubmit}>
            <table className="fancyTable">
                <tbody>
                <tr>
                    <td>
                        <label htmlFor='x' className='label'>X:</label>
                    </td>
                    <td>
                        <TextInput id='x' value={this.state.x}
                                   onUpdate={(o) => {
                                       this.handleChange(o, -5, 3, 'x')
                                   }}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor='y' className='label'>Y:</label>
                    </td>
                    <td>
                        <TextInput id='y' value={this.state.y}
                                   onUpdate={(o) => {
                                       this.handleChange(o, -3, 5, 'y')
                                   }}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor='r' className='label'>R:</label>
                    </td>
                    <td>
                        <TextInput id='r' value={this.state.r}
                                   onUpdate={(o) => {
                                       this.handleChange(o, -5, 3, 'r')
                                   }}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    }
}
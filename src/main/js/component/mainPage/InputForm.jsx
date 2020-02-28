import React from "react";
import belle from 'belle';

export default class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            x: '',
            y: '',
            r: '',
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        const point = {
            'x': event.target.x,
            'y': event.target.y,
            'r': event.target.r
        };
        this.props.addPoint(point);
        event.target.reset();
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
                        <TextInput id='x' value={this.state.x} onUpdate={(o) => {
                            this.setState({'x': o.value})
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor='y' className='label'>Y:</label>
                    </td>
                    <td>
                        <TextInput id='y' value={this.state.y} onUpdate={(o) => {
                            this.setState({'y': o.value})
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor='r' className='label'>R:</label>
                    </td>
                    <td>
                        <TextInput id='r' value={this.state.r} onUpdate={(o) => {
                            console.log("Radius");
                            console.log(this.props.points);
                            this.setState({'r': o.value});
                            this.props.changeRadius(o.value);
                        }}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    }
}
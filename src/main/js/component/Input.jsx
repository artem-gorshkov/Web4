import React from "react";

export default class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id} className='label'>{this.props.label}</label>
                <input className='input' name={this.props.id} id={this.props.id}
                       type={this.props.inputType} value={this.props.value}
                       onChange={this.props.onChange}/>
            </div>
        );
    }
}

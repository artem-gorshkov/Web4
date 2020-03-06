import React from "react";
import Plot from "./mainPage/Plot.jsx";
import InputForm from "./mainPage/InputForm.jsx";
import Table from "./mainPage/Table.jsx";

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setPoints(this.props.token);
    }

    render() {
        return <div>
            <Plot {...this.props}/>
            <div className="error">{this.props.error}</div>
            <InputForm {...this.props}/>
            <Table {...this.props}/>)
        </div>
    }
}

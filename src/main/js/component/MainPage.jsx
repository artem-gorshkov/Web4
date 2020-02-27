import React from "react";
import Plot from "./Plot.jsx";
import InputForm from "./InputForm.jsx";
import Table from "./Table.jsx";

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Plot {...this.props}/>
                <InputForm {...this.props}/>
                <Table {...this.props}/>)
            </div>)
    }
}

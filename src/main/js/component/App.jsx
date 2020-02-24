import React from "react";
import {connect} from 'react-redux';
import mapDispatchToProps from '../actions.js';
import Header from "./Header.jsx";
import Plot from "./Plot.jsx";
import InputForm from "./InputForm.jsx";
import Table from "./Table.jsx";

class App extends React.Component {

    render() {
        return <div>
            <Header/>
            <Plot {... this.props}/>
            <InputForm {... this.props}/>
            <Table {... this.props}/>
        </div>
    }

    componentDidMount() {
        this.props.setPoints();
    }
}



function mapStateToProps(state) {
    return {
        points: state.get("points"),
        radius: state.get("radius")
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
import React from "react";
import Form from "./Form";
import ExpandedView from "./ExpandedView";

class Bfloat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bitState : new Array(16).fill(0)};
    }

    componentDidMount() {
        document.title = "bFloat16 Visualizer"
    }

    changeBitState(bit, value) {
        let bitStates = [...this.state.bitState];
        bitStates[bit] = value
        this.setState({bitState: bitStates});
    }

    render() {
        return (
            <>
                <Form bitState={this.state.bitState} changeBitState={this.changeBitState.bind(this)}/>
                <ExpandedView bitState={this.state.bitState}/>
            </>
            );
    }
}

export default Bfloat;

/* eslint-disable react/prop-types */
import { Component } from "react";

class EvenCounterDisplayer extends Component {
    render() {
        return <p className="text-12">EvenDisplay Clicked: {this.props.count % 2 === 0 ? this.props.count : this.props.count - 1}</p>;

    }
}

export default EvenCounterDisplayer;
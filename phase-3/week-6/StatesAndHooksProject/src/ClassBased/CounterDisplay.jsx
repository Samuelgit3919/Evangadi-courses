/* eslint-disable react/prop-types */
import { Component } from 'react'

export default class CounterDisplay extends Component {
    render() {
        return (
            <div>
                <p>{this.props.count}</p>
            </div>
        )
    }
}


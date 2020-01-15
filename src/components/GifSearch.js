import React, { Component } from 'react'

export class GifSearch extends Component {
    handleChange = (event) => {
        this.props.handleChange(event.target.value)
    }


    render() {
        return (
            <div>
                <input type = 'text' onChange = {this.handleChange}/>
                <button onClick = {() => this.props.handleSubmit()}>Search</button>
            </div>
        )
    }
}

export default GifSearch

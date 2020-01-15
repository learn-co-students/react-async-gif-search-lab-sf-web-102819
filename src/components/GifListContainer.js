import React, { Component } from 'react'
import GifSearch from './GifSearch.js'
import GifList from './GifList.js'

export class GifListContainer extends Component {
    constructor(){
        super()
        this.state = {
            searchTerm: '',
            gifs: []
        }
    }

    handleChange = (input) => {
        this.setState({
            searchTerm: input
        })
        console.log(this.state.searchTerm)
    }

    handleSubmit = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(json => {
            
            this.setState({
                gifs: json.data.slice(0,3)
            })
            console.log(json.data)
        }
    
        )
    }

    render() {
        return (
            <div>
                <GifSearch handleSubmit = {this.handleSubmit} handleChange = {this.handleChange}/>
                <GifList gifData = {this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer

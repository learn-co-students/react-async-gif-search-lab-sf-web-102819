import React, { Component } from 'react'

export class GifList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.gifData.map(gif => <li><img src ={gif.images.original.url}/></li>) }
                </ul>
            </div>
        )
    }
}

export default GifList

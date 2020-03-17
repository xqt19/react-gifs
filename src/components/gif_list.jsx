import React from 'react'
import Gif from './gif'

class GifList extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div className="gif-list">
        {this.props.gifs.map(gif=> {return <Gif id={gif.id} key={gif.id} />})}
      </div>
    )
    this.props.gifs.map(gif => <Gif id={gif.id} />)
  }
}


export default GifList;

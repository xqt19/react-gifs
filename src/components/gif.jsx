import React from 'react'

class Gif extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return(
      <div>
        <img className="gif" src={src} />
      </div>
    )
  }
}



// const Gif =() => {
//   return(
//     <div>
//       {id = 'https://media.giphy.com/media/xT1XGxMBRTedbb5pSw/giphy.gif'}
//       <img className="gif" src={this.props.id} />    }
//     </div>
//   )
// }

export default Gif

//src="https://media.giphy.com/media/xT1XGxMBRTedbb5pSw/giphy.gif"

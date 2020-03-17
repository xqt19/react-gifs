import React from 'react'
import ReactDOM from 'react-dom'

class Moon extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: `The Time is: ${new Date().toLocaleTimeString()}`,
      active: true }
  }

  componentDidMount() {
    this.tickingTimer = setInterval(
      () => {
        this.setState({
          date: `The Time is: ${new Date().toLocaleTimeString()}`
        })
      }
    ,1000)
  }

  componentWillUnmount(){
    clearInterval(this.tickingTimer)
  }

  handleClick=()=>{
    ReactDOM.unmountComponentAtNode('Moon')
  }

  render() {
    return (
      <a className='btn btn-primary' onClick={this.handleClick}>
        {this.state.date}
      </a>
    )
  }
}

// THIS IS A CLOCK WHICH PAUSES WHEN CLICKED (NO UNMOUNT)
// class Moon extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       date: `The Time is: ${new Date().toLocaleTimeString()}`,
//       active: true }
//   }

//   componentDidMount() {
//     setInterval(
//       () => {
//         if (this.state.active){
//           this.setState({
//             date: `The Time is: ${new Date().toLocaleTimeString()}`
//           })
//         }
//       }
//     ,1000)
//   }

//   handleClick=()=>{
//     this.setState({
//       active: !this.state.active
//     })
//   }

//   render() {
//     return (
//       <a className='btn btn-primary' onClick={this.handleClick}>
//         {this.state.date}
//       </a>
//     )
//   }
// }


// THIS IS THE ORIGINAL MOON
// class Moon extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = { clicked: false }
//   }

//   handleClick = () =>{
//     this.setState({
//       clicked: !this.state.clicked
//     })
//   }

//   render() {
//     return (
//       <a href="#" className={"animated btn " + (this.state.clicked ? "bounceIn btn-success" : "bounceInRight btn-primary")} onClick={this.handleClick}>
//         This is a button
//       </a>
//     )
//   }
// }


export default Moon;

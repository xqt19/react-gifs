import React from 'react'

class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = { clicked: false }
  }

  handleClick = () =>{
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <a href="#" className={"animated btn " + (this.state.clicked ? "bounceIn btn-success" : "bounceInRight btn-primary")} onClick={this.handleClick}>
        This is a button
      </a>
    )
  }
}


export default Button;

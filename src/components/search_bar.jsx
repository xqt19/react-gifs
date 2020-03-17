import React from 'react'

class SearchBar extends React.Component{
  constructor(props){
    super(props)
  }

  handleChange= (e) => {
    this.props.search(e.target.value)
  }

  render(){
    return (
      <div>
        <input className="form-search" type="text" onChange={this.handleChange}/>
      </div>
    )
  }
}


export default SearchBar

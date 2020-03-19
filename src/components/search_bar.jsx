import React from 'react'

class SearchBar extends React.Component{
  constructor(props){
    super(props)
    this.state={
      query: "Homer Thinking"
    }
  }

  handleChange= (e) => {
    const query = e.target.value
    this.setState({
      query: query
    })
    this.props.search(query)
  }

  render(){
    return (
      <div>
        <input id="search-bar" className="form-search" value={this.state.query} type="text" onChange={this.handleChange}/>
      </div>
    )
  }
}


export default SearchBar

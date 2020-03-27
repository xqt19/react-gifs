import React from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selectedGif: '',
      gifs: [
        // {id: "gZEBpuOkPuydi"},
        // {id: "3oEdvb40HNvDWNmbyU"},
        // {id: "11D9WQ4TYDqrIc"},
        // {id: "xT1XGxMBRTedbb5pSw"}

        {id: "Zk9mW5OmXTz9e"},
        {id: "xT5LMuRbEiz9ZuhMME"},
        {id: "kvYxRi5OIwZbZ4R5ji"},
        {id: "3o7TKVUn7iM8FMEU24"},
        {id: "12rTjvF0ANQJsk"},
        {id: "fdHg7T902uzLy"},
        {id: "RqbkeCZGgipSo"},
        {id: "dSBCzU9g1WKUU"},
        {id: "vjGyYSsF765wc"},
        {id: "NE0PYCUVbswo0"}
      ]
    }
  }

  handleClick = (e) => {
    if (e.target.src){
      let myRe = /media\/(?<id>.+)\/gip/
      let src = e.target.src
      let id = (myRe.exec(src)[1])
      this.setState({
        selectedGif: id
      })
    }
  }

  search = (query) => {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${query}&limit=10&offset=0&rating=G&lang=en`
    // giphy('dc6zaTOxFJmzC').search({
    //   q:query,
    //   rating: 'g',
    //   limit: 10
    // }, (error, result) => {
    //   console.log(result),
    //   this.setState({
    //       gifs: result.data
    //   })
    // })
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(response =>{
        console.log(response)
        this.setState({
            gifs: response.data
        })
      })
  }

  render(){
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            {(this.state.selectedGif !== '') && <Gif id={this.state.selectedGif} />}
          </div>
        </div>
        <div className="right-scene" onClick={this.handleClick}>
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
};

export default App;


//wt5FB0la45lAB3kr5H0Yy75o4w994OGb

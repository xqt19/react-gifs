import React from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selectedGif: {id: ''},
      gifs: [
        {id: "gZEBpuOkPuydi"},
        {id: "3oEdvb40HNvDWNmbyU"},
        {id: "11D9WQ4TYDqrIc"},
        {id: "xT1XGxMBRTedbb5pSw"}
      ]
    }
  }

  handleClick = (e) => {
    if (e.target.src){
      let myRe = /media\/(?<id>.+)\/gip/
      let src = e.target.src
      let id = (myRe.exec(src)[1])
      this.setState({
        selectedGif: {id}
      })
    }
  }

  search = (query) => {
    giphy('wt5FB0la45lAB3kr5H0Yy75o4w994OGb').search({
      q:query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
          gifs: result.data
      })
    })
  }

  render(){
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            {(this.state.selectedGif.id !== '') && <Gif id={this.state.selectedGif.id} />}
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

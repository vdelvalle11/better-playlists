import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#FFF'
};
let fakeServerData= {
  user: {
    name: 'Victor',
    playlists: [
      {
       name: 'My favorites',
       songs: [
         {name: 'Beat It', duration: 1345},
         {name: 'Cannelloni Makaroni', duration: 1236},
         {name: 'Rosa Helikopter', duration: 70000},
        ]
      },
      {
       name: 'Discover Weekly',
       songs: [
         {name: 'Beat It', duration: 1345},
         {name: 'Cannelloni Makaroni', duration: 1236},
         {name: 'Rosa Helikopter', duration: 70000},
        ]
      },
      {
       name: 'Another Playlist - the best!',
       songs: [
         {name: 'Beat It', duration: 1345},
         {name: 'Cannelloni Makaroni', duration: 1236},
         {name: 'Rosa Helikopter', duration: 70000},
        ]
      },
      {
       name: 'Last Playlist',
       songs: [
         {name: 'Beat It', duration: 1345},
         {name: 'Cannelloni Makaroni', duration: 1236},
         {name: 'Rosa Helikopter', duration: 70000},
        ]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: "inline-block", width: "40%"}}>
        <h2>{this.props.playlists.length} Playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...defaultStyle, display: "inline-block", width: "40%"}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
      <input type="text" placeholder="Search" onKeyUp={event => this.props.onTextChange(event.target.value)}/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist
    return (
      <div style={{...defaultStyle, width: '25%', display: 'inline-block'}}>
        <img />
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map(song =>
            <li>{song.name}</li>
          )}
        </ul>
      </div>
    );
  };
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      filterString: ''
    }
  }
  componentDidMount(){
    setTimeout(
      () => {
        this.setState({serverData: fakeServerData});
      },1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
            <h1 style={{...defaultStyle, 'font-size': '54px'}}>
            {this.state.serverData.user.name}'s Playlists
          </h1>
          <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
          <HoursCounter playlists={this.state.serverData.user.playlists}/>
          <Filter onTextChange = {text => {        this.setState({filterString: text})
          }}/>
          {this.state.serverData.user.playlists.filter(playlist =>
            playlist.name.toLowerCase().includes(
              this.state.filterString.toLowerCase())
          ).map(playlist =>
            <Playlist playlist={playlist} />
          )}
        </div> : <h1 style={defaultStyle}>Loading...</h1>
      }
    </div>
    );
  }
}

export default App;

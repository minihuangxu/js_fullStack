import React, { Component } from 'react'
import Header from './Header.js'
import Search from './Search.js'
import Result from './Result.js';
export default class Main extends Component {
  constructor () {
    super();
    this.state= {
      beers: [],
      loading : true,
    }
  }
  componentDidMount () {
    const params = this.props.match.params || {}; // /search/:searchTerm
    const searchTerm = params.searchTerm || undefined;
    this.loadBeers(searchTerm);
  }
  loadBeers (searchTerm = "hops") {
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`).then(data =>data.json())
    .then(data => {
      console.log(data);
    })
  }
  render() {
    return (
      <div className="wrapper">
        czk fighting!!!
        <Header siteName="Beer me!"></Header>
        <Search></Search>
        <Result beers={this.state.beers} loading={this.state.loading}></Result>
      </div>
    )
  }
}

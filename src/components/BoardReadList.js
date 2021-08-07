import React, { Component } from 'react';

class BoardReadList extends Component {

  // state = {
  //   list:[]
  // }
  // componentDidMount() {
  //   fetch('newslettersGET_page-1.json')
  //     .then (response => response.json ()) 
  //     .then ((response) => {
  //       this.setState ({users: response})
  //     }); 
  // }
  
  state = {
    list:[]
  }

  componentDidMount() {
    fetch('newslettersGET_page-1.json') 
      .then(response => response.json())
      .then((response) => {
        console.log(response)
        this.setState({
          list:response.contents
        })
      })
  }

  render() {
    var listTag = [];
    for(var i=0; i<this.state.list.length; i++) {
      var items = this.state.list[i];
      listTag.push(
        <div className="board__list-item" key={items._id}>
          <a className="board__list-link" href="#none">

          </a>
        </div>
      );
    }
    return (
      <div className="board board--list">
        <div className="board__list">
          {listTag}
        </div>  
      </div>
    );
  }
}

export default BoardReadList;
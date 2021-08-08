import React, { Component } from 'react';

class BoardReadList extends Component {

  state = {
    list:[]
  }

  componentDidMount() {
    fetch('newslettersGET_page-1.json') 
      .then(response => response.json())
      .then((response) => {
        this.setState({
          list:response.contents
        })
      })
  }

  render() {
    let listTag = [];
    let dateTag = [];
    for(let i=0; i<this.state.list.length; i++) {
      let items = this.state.list[i];
      let docs = items.docs[0];
      listTag.push(
        <li className="board__list-item" key={items._id}>
          <a className="board__list-link" href="#none">
            <div className="board__list-topic">
              <strong className="board__list-subject">{docs.subject}</strong>
              <time className="board__list-time">{docs.createdAt}</time>
              <span className="board__list-name">
                {docs.fromName}
              </span>
            </div>
            <div className="board__list-thumbnail">
              <div className="board__list-thumbnail-container">
                <img src={docs.thumbnails}></img>
              </div>
            </div>
          </a>
        </li>
      );
      dateTag.push(
        <div className="board__list-time-container" key={items._id}>
          <time className="board__list-time-date">{items._id}</time>
        </div>
      )
    }

    return (
      <div className="board board--list">
        <div className="board__list">
          <div className="board__list-time">
            {dateTag}
          </div>
          <ul className="board__list-box">
            {listTag}  
          </ul>
        </div>  
      </div>
    );
  }
}

export default BoardReadList;
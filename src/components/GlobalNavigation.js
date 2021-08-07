import React, { Component } from 'react';

class GlobalNavigation extends Component {

  render() {
    return (
       <header className="gnb">
         <div className="gnb__container">
            <div className="gnb__search">
              <button className="gnb__search-button">검색</button>
            </div>
            <div className="gnb__menu">
              <button className="gnb__menu-button">메뉴</button>
            </div>
         </div>
       </header>
    );
  }
}

export default GlobalNavigation;
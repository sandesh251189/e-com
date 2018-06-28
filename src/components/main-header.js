import React, { Component } from "react";


class MainHeader extends Component{
  render(){
    return(
      <div className="main-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 logo-holder">
                      <div className="logo">
                        <img src="http://localhost:8080/src/images/logo.png" />
                      </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="input-group">
                            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                            <div className="input-group-append">
                            <button className="btn btn btn-warning" type="button">Search</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="dropdown">
                            <a className="dropdown-toggle" href="#" data-toggle="dropdown">Drop</a>
                            <ul className="dropdown-menu">
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default MainHeader;

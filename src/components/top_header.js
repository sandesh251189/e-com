import React ,{Component} from 'react';
class TopHeader extends Component{
  render(){
    return(
      <div className="topheader">
          <div className="container">
            <ul className="nav  justify-content-end">
                <li className="nav-item">
                  <a className="nav-link active" href="#">My Account</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Wishlist</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">My Cart</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Sign up</a>
                </li>
            </ul>

          </div>
      </div>
    )
  }
}

export default TopHeader;

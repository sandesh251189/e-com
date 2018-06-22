import React ,{Component} from 'react';
class TopHeader extends Component{
  render(){
    return(
      <div classNameName="topheader">
      <ul className="nav d-flex flex-row-reverse">
     <li className="nav-item">
       <a className="nav-link" href="#">Link</a>
     </li>
     <li className="nav-item">
       <a className="nav-link" href="#">Link</a>
     </li>
     <li className="nav-item">
       <a className="nav-link" href="#">Link</a>
     </li>

   </ul>
      </div>
    )
  }
}

export default TopHeader;

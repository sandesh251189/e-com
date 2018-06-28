import React,{Component} from 'react';
import TopHeader from '../top_header';
import MainHeader from '../main-header'
import Navbar from '../navbar'
class Header extends Component{
  render(){
    return(
          <div>
          <header>
              <TopHeader />
              <MainHeader />
</header>
          <Navbar />
          </div>
    )
  }
}
export default Header;

import React from "react";
import  Vxod  from "./Vxod";
import  Regist  from "./Regist";
import {withAuth} from './AuthContext';


class Form extends React.Component {
  state  = { formPage: "Vxod" };
  navigateTo = (page) => {
    this.setState({formPage:page})
  }
  changelout = (page) => {
      this.props.changelout(page)
  }
  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                
              </li>
              <li>
              <main data-testid="container">
                <section>{this.state.formPage=="Vxod" ?<Vxod navigateTo={this.navigateTo} changelout={this.changelout} /> : <Regist navigateTo={this.navigateTo} />}</section>
              </main>
              </li>
            </ul>
          </nav>
        </header>
        
      </>
    );
  }
}

export default Form;

import React from "react";
import  Vxod  from "./Vxod";
import  Regist  from "./Regist";


class Form extends React.Component {
  state  = { formPage: "Vxod" };
  navigateTo = (page) => {
    this.setState({formPage:page})
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
                <section>{this.state.formPage=="Vxod" ?<Vxod navigateTo={this.navigateTo} /> : <Regist navigateTo={this.navigateTo} />}</section>
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

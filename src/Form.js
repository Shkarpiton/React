import React from "react";
import  Vxod  from "./Vxod";
import  Regist  from "./Regist";

const PAGES = {
    Vxod: <Vxod />,
    Regist: <Regist />,
};

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
                <button>
            let result = 
              this.state.formPage=="Vxod" ?<Vxod navigateTo={this.navigateTo} /> : <Regist navigateTo={this.navigateTo} />;


                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main data-testid="container">
          <section>{this.state.formPage=="Vxod" ?<Vxod navigateTo={this.navigateTo} /> : <Regist navigateTo={this.navigateTo} />}</section>
        </main>
      </>
    );
  }
}

export default Form;

import React, { Component } from 'react';

import * as Section from './components/sections/styles';
import Header from './components/ui/Header';
import OrderForm from './components/order_form/OrderForm';
import TradingLog from './components/trading_log/TradingLog';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStock: false
    }
  }

  changeStock = (value) => {
    this.setState({
      selectedStock: value
    })
  }

  render() {
    return (
      <React.Fragment>
        <Section.BodyGridContainer>
          <Section.Body>
            <Header />
            <Section.Form>
              <OrderForm
                changeStock={this.changeStock}
              />
            </Section.Form>
            <Section.Graph>
              <Section.GraphTop></Section.GraphTop>
              <Section.GraphBottom></Section.GraphBottom>
            </Section.Graph>
          </Section.Body>
        </Section.BodyGridContainer>
        <TradingLog />
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateFlag } from './actions/flags';

import * as Section from './components/sections/styles';
import Header from './components/ui/Header';
import OrderForm from './components/order_form/OrderForm';
import Graph from './components/graph/Graph';
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
    });
    this.props.updateFlag([{type: 'stocks', flag: 'selected', value: value}])
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
              <Graph />
            </Section.Graph>
            <Section.List>
            test
            </Section.List>
          </Section.Body>
        </Section.BodyGridContainer>
        <TradingLog />
      </React.Fragment>
    );
  }
}

export default connect(null, { updateFlag})(App);

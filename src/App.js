import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateFlag } from './actions/flags';

import * as Section from './components/sections/styles';
import Header from './components/ui/Header';
import OrderForm from './components/order_form/OrderForm';
import Graph from './components/graph/Graph';
import OrderList from './components/order_list/OrderList';
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
    this.props.updateFlag([{type: 'stocks', flag: 'selected', value: value}, {type: 'prices', flag: 'selected', value: false}])
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
              <Graph selectPrice={this.selectPrice}/>
            </Section.Graph>
            <Section.List>
              <OrderList selectedStock={this.state.selectedStock}/>
            </Section.List>
          </Section.Body>
        </Section.BodyGridContainer>
        <TradingLog />
      </React.Fragment>
    );
  }
}

export default connect(null, { updateFlag })(App);

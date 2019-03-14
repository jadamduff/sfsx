import React, { Component } from 'react';

import * as styles from './styles'
import { formatMoney } from '../../utils/general';

import Dropdown from './form_builders/Dropdown'
import Input from './form_builders/Input';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        stock: false,
        trader: '',
        price: '',
        shares: '',
        buySell: 'buy'
      },
      dropdownOpen: false
    }
  }

  toggleDropdownOpen = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  selectStock = (event) => {
    let value;
    event.target.dataset.id === 'noselect' ? value = false : value = event.target.dataset.id
    this.props.changeStock(value);
    this.setState({
      stock: value
    })
  }

  handleInputChange = (event, type) => {
    let value;
    switch (type) {
      case 'money':
        value = formatMoney(event.target.value)
        break;
      default:
        value = event.target.value
    }
    this.setState({
      [event.target.name]: value
    })
  }

  toggleBuySell = () => {
    this.setState((prevState) => ({
      buySell: prevState.buySell === 'buy' ? 'sell' : 'buy'
    }))
  }

  renderFormBody = () => {
    if (this.state.dropdownOpen) {
      return (
        <div>
          <styles.DropdownOption></styles.DropdownOption>
        </div>
      )
    }
  }

  render() {
    const { stock, trader, price, shares, buySell } = this.state.formData;
    return (
      <styles.Container>
        <Dropdown selectedStock={stock} dropdownOpen={this.state.dropdownOpen} toggleDropdownOpen={this.toggleDropdownOpen}/>
        {!this.state.dropdownOpen &&
          <styles.BodyContainer>
            <styles.BodyRow>
              <styles.Label>Trader</styles.Label><Input />
            </styles.BodyRow>
            <styles.BodyRow>
              <styles.Label>Price</styles.Label><Input type="money" />
            </styles.BodyRow>
            <styles.BodyRow>
              <styles.Label>Shares</styles.Label><Input />
            </styles.BodyRow>
            <styles.Submit type="submit">Place Order</styles.Submit>
          </styles.BodyContainer>
        }
      </styles.Container>
    )
  }
}

export default OrderForm;

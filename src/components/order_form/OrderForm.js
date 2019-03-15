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
        price: '0.00',
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
    let value = event.target.value;
    switch (type) {
      case 'money':
        let scrubbed = event.target.value.replace(/\D/g,'').split('');
        if (scrubbed[0] === '0') {
          scrubbed.shift();
        }
        if (scrubbed.length < 2) {
          scrubbed.unshift('0');
          scrubbed.unshift('.');
        } else if (scrubbed.length === 2) {
          scrubbed.unshift('.');
        } else {
          scrubbed.splice(scrubbed.length - 2, 0, ".");
        }
        debugger
        value = formatMoney(scrubbed.join(''), 2);
        break;
      case 'number':
        value = event.target.value.replace(/\D/g,'');
        break;

      default:
        value = event.target.value
    }
    const _formatMoney = formatMoney
    debugger
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: value
      }

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
              <styles.Label>Trader</styles.Label><Input value={trader} name="trader" handleChange={this.handleInputChange} />
            </styles.BodyRow>
            <styles.BodyRow>
              <styles.Label>Price</styles.Label><Input value={price} name="price" type="money" handleChange={this.handleInputChange} />
            </styles.BodyRow>
            <styles.BodyRow>
              <styles.Label>Shares</styles.Label><Input value={shares} name="shares" type="number" handleChange={this.handleInputChange}/>
            </styles.BodyRow>
            <styles.Submit type="submit">Place Order</styles.Submit>
          </styles.BodyContainer>
        }
      </styles.Container>
    )
  }
}

export default OrderForm;

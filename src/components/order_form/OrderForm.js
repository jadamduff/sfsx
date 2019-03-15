import React, { Component } from 'react';

import { connect } from 'react-redux';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import * as styles from './styles'
import { formatMoney } from '../../utils/general';
import { updateBook } from '../../actions/orders.js';

import Dropdown from './form_builders/Dropdown'
import Input from './form_builders/Input';
import ToggleButton from './form_builders/ToggleButton';

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
    const value = event.target.dataset.id;
    this.props.changeStock(value);
    this.setState({
      formData: {
        ...this.state.formData,
        stock: value
      }
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

        value = formatMoney(scrubbed.join(''), 2);
        break;
      case 'number':
        value = event.target.value.replace(/\D/g,'');
        break;

      default:
        value = event.target.value
    }
    const _formatMoney = formatMoney

    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: value
      }

    })
  }

  toggleBuySell = () => {
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        buySell: prevState.formData.buySell === 'buy' ? 'sell' : 'buy'
      }
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateBook(this.state.formData);
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
      <styles.Container onSubmit={(event) => this.handleSubmit(event)}>
        <Dropdown selectedStock={stock} selectStock={this.selectStock} dropdownOpen={this.state.dropdownOpen} toggleDropdownOpen={this.toggleDropdownOpen}/>
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
            <styles.ToggleBodyRow>
              <styles.Label css={buySell === "sell" && css`opacity: .4`}>Buy</styles.Label>
              <ToggleButton position={buySell === "buy" ? "left" : "right"} onClick={() => this.toggleBuySell()} />
              <styles.Label css={buySell === "buy" && css`opacity: .4`}>Sell</styles.Label>
            </styles.ToggleBodyRow>
            <styles.Submit type="submit">Place Order</styles.Submit>
          </styles.BodyContainer>
        }
      </styles.Container>
    )
  }
}

export default connect(null, { updateBook })(OrderForm);

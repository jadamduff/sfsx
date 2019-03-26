import React, { Component } from 'react';
import { connect } from 'react-redux';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import * as styles from './styles';

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPrice: false
    }
  }

  componentDidMount() {
    if (this.props.selectedPrice !== false && this.props.selctedPrice !== undefined) {
      this.getSelectedPrice();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedStock !== this.props.selectedStock) {
      this.setState({
        selectedPrice: false
      })
    } else if ((prevProps.selectedPrice !== this.props.selectedPrice || prevProps.stocks !== this.props.stocks) && this.props.selectedPrice) {
      this.getSelectedPrice();
    }
  }

  getSelectedPrice = () => {
      const selectedPrice = this.props.stocks.find(stock => stock.id === this.props.selectedPrice.stock)[this.props.selectedPrice.buySell].prices.find(price => price.price === this.props.selectedPrice.price);
      debugger
      this.setState({
        selectedPrice: selectedPrice
      })

  }

  renderOrders = () => {
    if (this.props.selectedPrice && this.state.selectedPrice) {
      return this.state.selectedPrice.orders.map(order => {
        const { timestampReadable, trader, stock, price, shares, restingShares } = order;
        return (
          <styles.BodyRow>
            <styles.BodyRowCell css={css`width: 140px; padding: 0 0 0 10px`}>{timestampReadable}</styles.BodyRowCell>
            <styles.BodyRowCell>{trader}</styles.BodyRowCell>
            <styles.BodyRowCell>{stock}</styles.BodyRowCell>
            <styles.BodyRowCell css={css`width: 90px;`}>{this.props.selectedPrice.buySell.charAt(0).toUpperCase() + this.props.selectedPrice.buySell.slice(1)}</styles.BodyRowCell>
            <styles.BodyRowCell css={css`width: 100px;`}>{price}</styles.BodyRowCell>
            <styles.BodyRowCell css={css`width: 150px;`}>{shares}</styles.BodyRowCell>
            <styles.BodyRowCell css={css`width: 150px;`}>{restingShares}</styles.BodyRowCell>
          </styles.BodyRow>
        )
      })
    }
  }

  render() {
    return (
      <styles.Container>
        <styles.Header>
          {this.props.selectedStock && this.props.selectedPrice ? `${this.props.selectedStock} ${this.props.selectedPrice.buySell.charAt(0).toUpperCase() + this.props.selectedPrice.buySell.slice(1)}: $${this.props.selectedPrice.price}` : "-"}
        </styles.Header>
        <styles.List>
          <styles.BodyHeader>
            <styles.BodyRowCell css={css`width: 140px; padding: 0 0 0 10px`}>Timestamp</styles.BodyRowCell>
            <styles.BodyRowCell>Trader</styles.BodyRowCell>
            <styles.BodyRowCell>Ticker</styles.BodyRowCell>
            <styles.BodyRowCell css={css`width: 90px;`}>Buy/Sell</styles.BodyRowCell>
            <styles.BodyRowCell css={css`width: 100px;`}>Price</styles.BodyRowCell>
            <styles.BodyRowCell css={css`width: 150px;`}>Shares Ordered</styles.BodyRowCell>
            <styles.BodyRowCell css={css`width: 130px;`}>Resting Shares</styles.BodyRowCell>
          </styles.BodyHeader>
          {this.renderOrders()}
        </styles.List>
      </styles.Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stocks: state.book.stocks,
    selectedPrice: state.flags.prices.selected
  }
}

export default connect(mapStateToProps)(OrderList);

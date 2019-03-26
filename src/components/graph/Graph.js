import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateFlag } from '../../actions/flags';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import * as styles from './styles';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakPoint: undefined
    }
  }

  componentDidMount() {
    this.setBreakPoints();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.stocks !== this.props.stocks || prevProps.selectedStockId !== this.props.selectedStockId) {
      this.setBreakPoints();
    }
  }

  breakPoints = [4, 12, 50, 100, 500, 1000, 2500, 5000, 7500, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000];

  setBreakPoints = () => {
    let breakPoint;
    const selectedStock = this.props.stocks.find(stock => stock.id === this.props.selectedStockId);
    if (selectedStock !== undefined) {
      let highestSharesCount = 0;
      selectedStock.buy.prices.forEach(price => {
        let restingShares = 0;
        price.orders.forEach(order => {
          restingShares += order.restingShares;
        })
        if (restingShares > highestSharesCount) {
          highestSharesCount = restingShares
        }
      })
      selectedStock.sell.prices.forEach(price => {
        let restingShares = 0;
        price.orders.forEach(order => {
          restingShares += order.restingShares;
        })
        if (restingShares > highestSharesCount) {
          highestSharesCount = restingShares
        }
      })
      this.breakPoints.forEach(point => {
        if (breakPoint === undefined) {
          if (highestSharesCount <= point) {
            breakPoint = point;
          }
        }
      })
      this.setState({
        breakPoint: breakPoint
      })
    }
  }

  renderBreakPoints = () => {
    const { breakPoint } = this.state;
    let graphBreakingPoints = [breakPoint, breakPoint * .75, breakPoint * .5, breakPoint * .25];
    return graphBreakingPoints.map(point => {
      return (
        <styles.GraphLabelColumnRow>{point}</styles.GraphLabelColumnRow>
      )
    })
  }

  renderBars = () => {
    const selectedStock = this.props.stocks.find(stock => stock.id === this.props.selectedStockId);
    if (selectedStock !== undefined) {
      const buyBars = selectedStock.buy.prices.map(price => {
        let restingShares = 0;
        price.orders.forEach(order => {
          restingShares += order.restingShares;
        })
        const height = ((restingShares / this.state.breakPoint) * 100).toString() + "%";
        return (
          <styles.GraphBarWrapper>
            <styles.GraphBarContainer>
              <styles.GraphBarTop>
                <styles.GraphBar height={height} backgroundColor={"#2962FF"}></styles.GraphBar>
              </styles.GraphBarTop>
              <styles.GraphBarBottom>{'$' + price.price}</styles.GraphBarBottom>
            </styles.GraphBarContainer>
          </styles.GraphBarWrapper>
        )
      })

      const sellBars = selectedStock.sell.prices.map(price => {
        let restingShares = 0;
        price.orders.forEach(order => {
          restingShares += order.restingShares;
        })
        const height = ((restingShares / this.state.breakPoint) * 100).toString() + "%";
        return (
          <styles.GraphBarWrapper>
            <styles.GraphBarContainer>
              <styles.GraphBarTop>
                <styles.GraphBar height={height} backgroundColor={"#E53935"}></styles.GraphBar>
              </styles.GraphBarTop>
              <styles.GraphBarBottom>{price.price}</styles.GraphBarBottom>
            </styles.GraphBarContainer>
          </styles.GraphBarWrapper>
        )
      })
      return [...buyBars, ...sellBars];
    }
  }

  render() {
    return (
      <styles.GraphSectionWrapper>
        <styles.GraphLabelColumn>
          {this.state.breakPoint !== undefined && this.renderBreakPoints()}
        </styles.GraphLabelColumn>
        <styles.GraphContainer>
          <styles.GraphRow></styles.GraphRow>
          <styles.GraphRow></styles.GraphRow>
          <styles.GraphRow></styles.GraphRow>
          <styles.GraphRow></styles.GraphRow>
        </styles.GraphContainer>
        <styles.GraphBarsContainer>
          {this.renderBars()}
        </styles.GraphBarsContainer>
      </styles.GraphSectionWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedStockId: state.flags.stocks.selected,
    stocks: state.book.stocks
  }
}

export default connect(mapStateToProps, { updateFlag })(Graph);

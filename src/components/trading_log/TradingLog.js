import React, { Component } from 'react';

import { connect } from 'react-redux';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import * as styles from './styles';

import CloseIcon from '../ui/CloseIcon';

class TradingLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleOpen = () => {
    this.setState((prevState) => ({
      open: !prevState.open
    }))
  }

  css = () => {
    if (this.state.open) {
      return (css`
        height: 95%;
        overflow: scroll
        `)
    } else {
      return (css`
        height: 65px;
        overflow: hidden;
        `)
    }
  }

  renderExecutions = () => {
    return this.props.executions.map(exc => {
      const { timestamp, ticker, price, shares } = exc;
      return (
        <styles.BodyRow>
          <styles.BodyRowCell css={css`width: 140px; padding: 0 0 0 10px`}>{timestamp}</styles.BodyRowCell>
          <styles.BodyRowCell>{ticker}</styles.BodyRowCell>
          <styles.BodyRowCell>{price}</styles.BodyRowCell>
          <styles.BodyRowCell>{shares}</styles.BodyRowCell>
        </styles.BodyRow>
      )
    })
  }


  render() {

    return (
      <styles.Container css={this.css()}>
        <styles.Tab onClick={this.toggleOpen}>
          <styles.TabLeft>Trading Log</styles.TabLeft>
          <styles.TabRight>
            {this.state.open ? <CloseIcon /> :
              <React.Fragment>
                <img css={css`
                  width: 11.5px;
                  height: 7px;
                  display: inline-block;
                  margin: 20px 0 0 auto;
                  transform: rotate(180deg);
                  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
                    display: none
                  }
                `} src={require('../../images/dropdown-arrow.png')} alt=''/>
                <img css={css`
                  display: none;
                  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
                    width: 11.5px;
                    height: 7px;
                    display: inline-block;
                    margin: 20px 0 0 auto;
                    transform: rotate(180deg);
                  }
                `} src={require('../../images/dropdown-arrow.png')} alt=''/>
              </React.Fragment>
            }
          </styles.TabRight>
        </styles.Tab>
        <styles.BodyWrapper>
          <styles.Body>
            <styles.BodyHeader>
              <styles.BodyRowCell css={css`width: 140px; padding: 0 0 0 10px`}>Timestamp</styles.BodyRowCell>
              <styles.BodyRowCell>Ticker</styles.BodyRowCell>
              <styles.BodyRowCell>Price</styles.BodyRowCell>
              <styles.BodyRowCell>Shares</styles.BodyRowCell>
            </styles.BodyHeader>
            {this.renderExecutions()}
          </styles.Body>
        </styles.BodyWrapper>
      </styles.Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    executions: state.book.executions
  }
}

export default connect(mapStateToProps)(TradingLog);

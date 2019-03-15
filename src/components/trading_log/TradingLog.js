import React, { Component } from 'react';

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
      </styles.Container>
    )
  }
}

export default TradingLog;

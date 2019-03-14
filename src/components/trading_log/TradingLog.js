import React, { Component } from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import * as styles from './styles';

class TradingLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  height = () => {
    if (this.state.open) {
      return (css`
        height: 95%;
        `)
    } else {
      return (css`
        height: 65px;
        `)
    }
  }

  render() {

    return (
      <styles.Container css={css`
          ${this.height()}
        `}>

      </styles.Container>
    )
  }
}

export default TradingLog;

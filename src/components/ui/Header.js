import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { HeaderStyles } from './styles';

import Input from '../order_form/form_builders/Input';

const Header = (props) => {
  return (
    <HeaderStyles>
      <img
        css={css`
          width: 66px;
          height: 33px;
          margin: 35px 0 0 0;
          display: inline-block;
          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            display: none
          }
        `}
        src={require('../../images/sfsx_logo.png')}
        alt=""
      />
      <img
        css={css`
          display: none;
          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            width: 66px;
            height: 33px;
            margin: 35px 0 0 0;
            display: inline-block;
          }
        `}
        src={require('../../images/sfsx_logo@2x.png')}
        alt=""
      />
    </HeaderStyles>
  )
}

export default Header;

import React, { Component } from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { DropdownContainer, DropdownBox, DropdownOption } from '../styles';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    }
  }

  renderSelectedStock = () => {
    return this.props.stock ? this.props.stock : 'Select One'
  }

  render() {
    const rotate = this.props.dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
    return (
      <DropdownContainer>
        <DropdownBox onClick={this.props.toggleDropdownOpen}>
          {this.renderSelectedStock()}
          <img css={css`
            width: 11.5px;
            height: 7px;
            display: inline-block;
            margin: 20px 0 0 auto;
            transform: ${rotate};
            transition: transform .2s;
            @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
              display: none
            }
          `} src={require('../../../images/dropdown-arrow.png')} alt=''/>
          <img css={css`
            display: none;
            @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
              width: 11.5px;
              height: 7px;
              display: inline-block;
              margin: 20px 0 0 auto;
              transform: ${rotate};
              transition: transform .2s;
            }
          `} src={require('../../../images/dropdown-arrow.png')} alt=''/>
        </DropdownBox>
        {this.props.dropdownOpen &&
          <React.Fragment>
            <DropdownOption>GOOG</DropdownOption>
            <DropdownOption>FB</DropdownOption>
            <DropdownOption>ORCL</DropdownOption>
            <DropdownOption>ZGRO</DropdownOption>
          </React.Fragment>
        }
      </DropdownContainer>
    )
  }
}

export default Dropdown;

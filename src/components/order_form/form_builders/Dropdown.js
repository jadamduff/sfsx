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
    return this.props.selectedStock ? this.props.selectedStock : 'Select One'
  }

  handleSelect = (event) => {
    this.props.selectStock(event);
    this.props.toggleDropdownOpen();
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
            <DropdownOption data-id="GOOG" onClick={(event) => this.handleSelect(event)}>GOOG</DropdownOption>
            <DropdownOption data-id="FB" onClick={(event) => this.handleSelect(event)}>FB</DropdownOption>
            <DropdownOption data-id="ORCL" onClick={(event) => this.handleSelect(event)}>ORCL</DropdownOption>
            <DropdownOption data-id="ZGRO" onClick={(event) => this.handleSelect(event)}>ZGRO</DropdownOption>
          </React.Fragment>
        }
      </DropdownContainer>
    )
  }
}

export default Dropdown;

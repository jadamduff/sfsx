import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import * as Form from '../styles';

const Input = (props) => {
  const { value, name, type, handleChange } = props;
  return (
    <React.Fragment>
      {props.type === 'money' &&
        <div css={css`
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          margin: 8px -80px 0 auto;
          color: #424242;
          `}>
          $
        </div>
      }
      <Form.Input value={value} name={name} onChange={(event) => (handleChange(event, type))}/>
    </React.Fragment>
  )
}

export default Input;

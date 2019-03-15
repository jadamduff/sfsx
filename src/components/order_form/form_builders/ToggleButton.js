import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import * as styles from '../styles';

const ToggleButton = (props) => {
  return (
    <styles.ToggleButtonContainer onClick={props.onClick}>
      <styles.ToggleButtonKnob position={props.position === "left" ? "translateX(0)" : "translateX(16px)"}>
        </styles.ToggleButtonKnob>
    </styles.ToggleButtonContainer>
  )
}

export default ToggleButton;

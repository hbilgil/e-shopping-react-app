import React from 'react';
import lottie from 'lottie-web';
import {defineElement} from 'lord-icon-element';

// register lottie and define custom element
defineElement(lottie.loadAnimation);

export type LordIconTrigger =
  | 'hover'
  | 'click'
  | 'loop'
  | 'loop-on-hover'
  | 'morph'
  | 'morph-two-way';

export type LordIconProps = {
  src?: string;
  trigger?: LordIconTrigger;
  size?: number;
};

export const LordIcon = ({
  src,
  trigger,
  size,
}: LordIconProps) => {
  return (
    <lord-icon
      src={src}
      trigger={trigger}
      style={
        {width: size, 
        height: size
        }
      }
    />
  );
};
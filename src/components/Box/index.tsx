import * as React from 'react'
import { BoxStyles } from './styles';

interface BoxProps {
  size: string
}

const Box: React.FC<BoxProps> = ({size}) => {
  return (
  <BoxStyles 
  className={size}>
  </BoxStyles>
  )
};

export default Box;
import * as React from 'react'
import StyledButton from './styles';

interface ButtonProps {
  size?: 'sm' | 'm' | 'lg',
  border?: boolean,
  blur?: number
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
      <StyledButton 
        {...props}
      />
    )
};

export default Button;
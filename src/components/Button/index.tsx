import * as React from 'react'
import StyledButton from './styles';

interface ButtonProps {
  size?: 'sm' | 'm' | 'lg'
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
      <StyledButton 
        {...props}
      />
    )
};

export default Button;
import styled from 'styled-components';

interface StyledDividerProps {
   
}

const StyledDivider = styled.div<StyledDividerProps>`
    width: 100%;
    height: 1px;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
`
export default StyledDivider;
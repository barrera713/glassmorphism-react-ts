import styled from 'styled-components';

interface StyledButtonProps {
    size?: string,
}

const StyledButton = styled.div<StyledButtonProps>`
    width: 300px;
    height: 200px;
`
export default StyledButton ;
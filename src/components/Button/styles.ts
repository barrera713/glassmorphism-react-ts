import styled from 'styled-components';
import { selectButtonSize } from '../../utils/ButtonTools';
interface StyledButtonProps {
    size?: string,
    blur?: number,
    border?: boolean
}

const StyledButton = styled.div<StyledButtonProps>`
    ${(props: StyledButtonProps) => ( selectButtonSize(props.size!))};
    margin: 0 auto;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur(${(props: StyledButtonProps) => `${props.blur}px`});
    -webkit-backdrop-filter: blur(${(props: StyledButtonProps) => `${props.blur}px`});
    border-radius: 7px;
    border: ${(props: StyledButtonProps) => props.border === false ? `none;` : `1px solid rgba( 255, 255, 255, 0.18 );`}
    outline: none;

    font-weight: bold;
    font-size: 0.9375em;
    color: white; 
    text-align: center;
    align-items: center;
    display: inline-grid;
    vertical-align: middle;
    &:hover {
        cursor: pointer;
        background: rgba( 255, 255, 255, 0.35 );
    }
`
export default StyledButton ;
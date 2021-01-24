import styled from 'styled-components';
import { selectListSize } from '../../utils/tools';

interface StyledListProps {
    size?: 'sm' | 'lg'
}
export const StyledList = styled.div<StyledListProps>`
    text-align: left;
    font-weight: bold;
    justify-content: center;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    width: 100%;

    p {
        display: table-cell;
        vertical-align: middle;
        height: inherit;
        padding-left: 10px;
    }
`


export const StyledListItem = styled.div<StyledListProps>`
    ${(props: StyledListProps) => ( selectListSize(props.size!))};
    justify-content: center;
    border-bottom: 2px solid rgba( 255, 255, 255, 0.2 );
    color: #ffffff;
`






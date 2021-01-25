import styled from 'styled-components';
import { selectListHeight, selectListText } from '../../utils/ListTools';

interface StyledListProps {
    height?: 'sm' | 'lg';
    textAlign?: 'left' | 'center' | 'right';
}

export const StyledList = styled.div<StyledListProps>`
    font-weight: bold;
    
    background: rgba( 255, 255, 255, 0.05 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    width: 100%;
    ${(props: StyledListProps) => ( selectListText(props.textAlign!))};


    p {
        display: table-cell;
        vertical-align: middle;
        height: inherit;
    }
`


export const StyledListItem = styled.div<StyledListProps>`
    ${(props: StyledListProps) => ( selectListHeight(props.height!))};
    border-bottom: 1.5px solid rgba( 255, 255, 255, 0.2 );
    color: #ffffff;
`






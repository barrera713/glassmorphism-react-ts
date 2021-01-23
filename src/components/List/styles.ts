import styled from 'styled-components';
import { selectListSize } from '../../utils/tools';

interface StyledListProps {
    
}


export const StyledList = styled.div<StyledListProps>`
    text-align: left;
`

interface StyledListItemProps {
    size?: 'sm' | 'lg'
}

export const StyledListItem = styled.div<StyledListItemProps>`
    ${(props: StyledListItemProps) => ( selectListSize(props.size!))};
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
`

import styled from 'styled-components';

interface StyledBoxProps {
    size: string
}

const StyledBox = styled.div<StyledBoxProps>`
    ${(props: StyledBoxProps) => {
        const size = props.size
            if(size === 'small') {
                return ` 
                    height: 300px;
                    width: 300px;
                `
            } else if(size === 'medium') {
                return `
                    height: 500px;
                    width: 500px;
                `
            } else {
                return `
                    height: 700px;
                    width: 700px;
                `
            }
        }
    }
    margin: 0 auto;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 15px;

    border: 1px solid rgba( 255, 255, 255, 0.18 );
`
export default StyledBox;

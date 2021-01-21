import styled from 'styled-components';

interface StyledBoxProps {
    size?: string,
    border?: boolean,
    blur?: number,
}

const StyledBox = styled.div<StyledBoxProps>`
    ${(props: StyledBoxProps) => {
        const {size } = props;
            if(size === 'sm') {
                return ` 
                    height: 200px;
                    width: 200px;
                `
            } else if(size === 'm') {
                return `
                    height: 400px;
                    width: 400px;
                `
            } else if(size === 'lg') {
                return `
                    height: 500px;
                    width: 500px;
                    `
                }
                else {
                    return `
                    height: 300px;
                    width: 300px;
                    `
                }
            }  
        }
        margin: 0 auto;
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur(${(props: StyledBoxProps) => `${props.blur}px`});
        -webkit-backdrop-filter: blur(${(props: StyledBoxProps) => `${props.blur}px`});
        border-radius: 15px;
        border: ${(props: StyledBoxProps) => props.border === false ? `none;` : `1px solid rgba( 255, 255, 255, 0.18 );`}
    `
export default StyledBox;

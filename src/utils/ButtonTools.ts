export const selectButtonSize = (size: string) => {
    let selected: string;
    if(size === 'sm') {
        selected = ` 
            height: 30px;
            width: 65px;
        `
    } else if(size === 'm') {
        selected = `
            height: 40px;
            width: 100px;
        `
    } else if(size === 'lg') {
        selected = `
            height: 45px;
            width: 125px;
            `
    } else {
        selected = `
        height: 40px;
        width: 110px;
        `
    }
    return selected;
};
export const selectBoxSize = (size: string) => {
    let selected: string;
    if(size === 'sm') {
        selected = ` 
            height: 200px;
            width: 200px;
        `
    } else if(size === 'm') {
        selected = `
            height: 400px;
            width: 400px;
        `
    } else if(size === 'lg') {
        selected = `
            height: 500px;
            width: 500px;
            `
    } else {
        selected = `
        height: 300px;
        width: 300px;
        `
    }
    return selected;
};
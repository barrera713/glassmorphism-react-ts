export const selectListHeight = (height: string) => {
    let selected: string;
    if(height === 'sm') {
        selected = ` 
            height: 20px;
            font-size: 12px;
        `
    } else if(height === 'lg') {
        selected = `
            height: 40px;
            font-size: 16px;
        `
    } else {
        selected = `
        height: 30px;
        font-size: 14px;
        `
    }
    return selected;
};


export const selectListText = (textAlign: string) => {
    let selected: string;
    if(textAlign === 'center') {
        selected = ` 
            text-align: -webkit-center;
        `
    } else if(textAlign === 'right') {
        selected = `
            text-align: -webkit-right;
            p {
                padding-right: 10px;
            }
        `
    } else {
        selected = `
            text-align: -webkit-left;
            p {
                padding-left: 10px;
            }
        `
    }
    return selected;
};



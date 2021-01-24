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



export const selectListSize = (size: string) => {
    let selected: string;
    if(size === 'sm') {
        selected = ` 
            height: 20px;
            font-size: 12px;
        `
    } else if(size === 'lg') {
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


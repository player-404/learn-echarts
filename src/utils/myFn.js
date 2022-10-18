export const throttled = (fn, delay = 1000) => {
    console.log(123);
    let timer = null;
    return function (...args) {
        console.log("fn", fn);
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args);
                timer = null;
            }, delay);
        }
    };
};

export const debounce = (fn, wait = 300) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    };
};

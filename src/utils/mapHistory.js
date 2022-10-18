export const pushHistory = (list, info) => {
    if (list.length === 0) {
        list.push(info);
        return;
    }

    const index = list.length - 1;
    if (list[index].level === info.level) {
        list[index] = info;
    } else {
        list.push(info);
    }
};

export const popHistiry = (list) =>
    new Promise((res, rej) => {
        const len = list.length;
        if (len === 1) {
            rej("不能再返回了");
            return;
        }
        list.pop();
        res(list);
    });

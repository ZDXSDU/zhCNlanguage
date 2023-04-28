const resArr = []; // 存放结果
resArr.push(codeStr);
const target = {
    '令': 'let',
    '为': '=',
    '变量': ' ',
    '等于？': '==',
    '大于？': '>',
    '小于？': '<',
    '大于等于？': '>=',
    '小于等于？': '<=',
    '不等于？': '!=',
    '若': 'if',
    '则': 'else',
    '打印': 'console.log',
    '弹出': 'alert',
    '加': '+',
    '减': '-',
    '乘': '*',
    '除': '/',
    '自加': '++',
    '自减': '--',
    '取余': '%',
    '当前时间': 'Date()'
};
document.addEventListener('DOMContentLoaded', () => {
    try {
        for (let index = 0; index < 5; index++) {
            for (const key in target) {
                if (Object.hasOwnProperty.call(target, key)) {
                    const value = target[key];
                    if (resArr[resArr.length - 1].indexOf(value)) resArr.push(resArr[resArr.length - 1].replace(key, value));
                }
            }

        }
    } catch (error) {
        resArr.push('alert(出错了!!!)');
    } finally {
        document.querySelector('.js').innerHTML = resArr[resArr.length - 1]
    }
})
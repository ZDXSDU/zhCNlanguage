const 控制台输出 = (va) => { console.log(va) }
const 浏览器 = { 弹窗: (value) => { window.alert(value) }, 获取屏幕参数: () => { return window.clientInformation }, }
const 元素样式 = {
    设置宽度: (ele, va) => { ele.style.width = va + 'px' },
    设置高度: (ele, va) => { ele.style.height = va + 'px' },
    设置背景颜色: (ele, va) => { ele.style.backgroundColor = va }
}
const 通过类名获取元素 = (className) => { return document.querySelector(className) }
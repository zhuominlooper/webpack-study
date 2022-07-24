

//把转成的css源码渲染成标签
module.exports = function (source) {
  let styleDom = `let style=document.createElement('style')
  style.innerHTML=${JSON.stringify(source)}
  document.head.appendChild(style)
  `;
  return styleDom
};

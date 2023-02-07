await fetch( ' http://ananqiexiafan.icu:9999/GetCommand?u=777', {
    method: 'GET',
}).then(res=>res.json).then(data=>{
data.data.forEach(data =>{//遍历文章列表
const h1 = document.createElement( 'h1')//创建标题节点
newNode.innerHTML = data.Art.Title//填充标题内容
wrap.append (h1)//往页面插入标题
const content = document.createElement( 'div')//创建内容节点
content.innerHTML = data.Art.Content//填充内容
wrap. append (content)//往页面插入内容
});
})
 
### el-popover

> showPopover属性    通过js控制el-popover显示与隐藏

```javascript
this.$refs.popover.showPopover = false
```



### el-table

```css
.el-table{
    /* 表格字体颜色 */
    color:white;
    /* 表格边框颜色 */
    /* border: 0.5px solid #758a99; */
    height: 500px;
}
/* 表格内背景颜色 */
.el-table th, .el-table tr,.el-table td{
    border: 0;
    background-color: transparent;
}
/* 双数行背景颜色 */
.el-table--striped .el-table__body tr.el-table__row--striped td {
    background-color:#fff;
    background-color: rgba(148, 144, 144, 0.3)
}
/* 使表格背景透明 */
.el-table th, .el-table tr {
	background-color: transparent;
}
/* 删除表格下横线 */
.el-table::before {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0px;
}
/* 表格表头字体颜色 */
.el-table thead {
    color: white;
    font-weight: 500;
    background-color: rgba(148, 144, 144, 0.3)
}
```



### el-tree(异步树)

> 异步树加载,初始值通过ajax获取,实现拖拽必须设定data属性,
>
> 拖拽完成后更新当前节点下的所有子元素
>
> 因初始设置了data属性,因此每次拖拽都会导致data中增加当前拖拽元素的信息,导致再次拖拽将重复渲染上次拖拽元素,因此,拖拽结束后需将当前拖拽元素从data中移除

> 若异步树el-tree中设置了:data = 'data',  则添加数据的时候,应将添加成功后的子类从data中移除,否则再次渲染会造成还存在data中的数据渲染,从而出现相同数据被多次渲染



```javascript
loadTree(node, resolve) {
    let nodePid = 0
    if (node.level !== 0) {
        nodePid = node.data.id
    }
    this.axios.get('ssddssds', {nodePid}).then((data) => {
        const data = data.map(item => {
            return {
                xxx,
                xxx
            }
        })
        resolve(data)
    })
}

拖拽完成后执行请求:
handleCompleteDrop(dragNode, dropNode, type) {
    // 确定参数,发送请求
    params = {
        type: type,
        srcNode: {},
        tarNode: {}
    }
    this.axios.post('xxxx')
        .then(res => {
        	const currentNode =  this.$refs.tree.getNode(dragNode.data)
            if (type === 'inner') {
                currentNode.data.nodePid = params.tarNode.nodeId
                dropNode.isLeaf = true
                dropNode.parent.loaded = false
                dropNode.expand()
            } else {
                currentNode.parent.data.nodeId = params.tarNode.nodePid
                currentNode.parent.loaded = false
                currentNode.parent.expand()
                if (currentNode.parent.data.nodePid === 0) {
                    this.splitData(dragNode.data.nodeId)
                }
            }
    	})
    	.catch(res => {  // 处理同名问题
        	const draggingNode = this.$refs.tree.getNode(dragNode.data.nodePid) || 					this.$refs.tree.root  // 获取dragNode的父node,当父node为null时获取根节点node
             // 获取dropNode的父node,当type为inner时, 获取自己的node,当父node为null时获取根节点node
            const droppingNode = type === 'inner' ? 					                			this.$refs.tree.getNode(dropNode.data.NodeId) :               				 			 this.$refs.tree.getNode(dropNode.data.nodePid) || this.$refs.tree.root
            draggingNode.loaded = false // 更新节点
        	draggingNode.expand()
        	droppingNode.loaded = false  // 更新节点
        	droppingNode.expand()
        	this.splitData(dragNode.data.nodeId) // 当nodePid为0时,删除data中增加的数据
    	})
}

// 添加数据  this.treeData为点击当前元素的Node
this.$refs.tree.append(obj, this.treeData.node)
this.treeData.node.parent.loaded = false
this.treeData.expand()

// 移除节点操作
this.$refs.tree.remove(obj)

function splitData(id) {
    const index = this.data.findIndex(item => {
        return item.id === id
    })
    this.data.splice(index, 1)
}



拖拽元素的node获取 currentNode =  this.$refs.tree.getNode(dragNode.data)
// 当type === 'inner'
dragNode.data.nodePid = params.target.id
dropNode.isLeaf = true
dropNode.parent.loaded = false
dropNode.expand()
// 更新父节点参数
currentNode.parent.loaded = false
currentNode.parent.expand()
// 当拖拽后节点为根节点时  this.data为tree的data
if(currentNode.parent.key === 0) {
    const index = this.data.findIndex(item => {
        return item.id === dragNode.data.id
    })
    this.data.splice(index, 1)
}

```


function main() {
  const data = [
    { id: '01', name: '张大大', pid: '', job: '项目经理' },
    { id: '02', name: '小亮', pid: '01', job: '产品leader' },
    { id: '03', name: '小美', pid: '01', job: 'UIleader' },
    { id: '04', name: '老马', pid: '01', job: '技术leader' },
    { id: '05', name: '老王', pid: '01', job: '测试leader' },
    { id: '06', name: '老李', pid: '01', job: '运维leader' },
    { id: '07', name: '小丽', pid: '02', job: '产品经理' },
    { id: '08', name: '大光', pid: '02', job: '产品经理' },
    { id: '09', name: '小高', pid: '03', job: 'UI设计师' },
    { id: '10', name: '小刘', pid: '04', job: '前端工程师' },
    { id: '11', name: '小华', pid: '04', job: '后端工程师' },
    { id: '12', name: '小李', pid: '04', job: '后端工程师' },
    { id: '13', name: '小赵', pid: '05', job: '测试工程师' },
    { id: '14', name: '小强', pid: '05', job: '测试工程师' },
    { id: '15', name: '小涛', pid: '06', job: '运维工程师' }
  ]

  const expectedResult =
    [{
      label: '张大大',
      children: [
        {
          label: '小亮',
          children: [{ label: '小丽' }, { label: '大光' }]
        },
        {
          label: '小美',
          children: [{ label: '小高' }]
        },
        {
          label: '老马',
          children: [{ label: '小刘' }, { label: '小华' }, { label: '小李' }]
        },
        {
          label: '老王',
          children: [{ label: '小赵' }, { label: '小强' }]
        },
        {
          label: '老李',
          children: [{ label: '小涛' }]
        }
      ]
    }]


  let result = arr2tree(data)

  console.log(JSON.stringify(result))
}

function arr2tree(arr) {
  // arr 数组 obj 对象 tree 树

  // 树
  let tree = []

  // 不是数组，直接返回空数组
  if (!Array.isArray(arr)) return tree

  // 将数组转成对象
  let obj = {}
  // 数组里每个员工的ID作为对象的属性（key）
  arr.forEach((item) => {
    obj[item.id] = item
  })
  // console.log(obj)

  // 遍历每个员工，用PID找到上级员工
  arr.forEach((item) => {
    // 临时保存上级员工的信息
    let parent = obj[item.pid]
    // console.log('parent', item.pid, parent)

    // 当前员工删除pid，表示找到上级
    delete item.pid
    // 只保留label和id
    item['label'] = item.name
    delete item.name

    if (parent) {
      // 如果上级员工在对象里能找到，就添加到这个上级员工的下属列表里
      // 防止这个上级员工还没初始化children属性，先做安全检查并初始化
      (parent.children || (parent.children = [])).push(item)
    } else {
      // 否则，说明这个员工找不到上级员工，可以直接加到树的根节点
      tree.push(item)
    }
  })

  return tree
}

main()

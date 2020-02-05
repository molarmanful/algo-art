let px = new Px(out, 4)
let r = new Reddit(25,
  'Firefox bot to pull comments v0.1 (by /u/iexhalepoopama)',
  '2kvhXQhGEYlcPg',
  'GcytRp0II_vBlquNNyvHN5LUfC8',
  '29767737-adkTtnNl3PngrSGc-dhD7ni_0Z4'
)

let start = 0

let stream = words=>{
  let x = _=> start % px.width
  let y = _=> (start - x()) / px.width

  while(words.length){
    if(words[0].length){
      let chars = words[0].splice(0, 3)
      px.setpx(x(), y(), chars[0], chars[1] || 0, chars[2] || 0)
    } else {
      words.shift()
      px.setpx(x(), y(), 0, 0, 0)
    }
    start++
  }
  px.setpx(x(), y(), 0, 0, 0)
}

let refresh = _=>{
  start = 0
  r.reset()
  px.clear()
  let sub
  if(type.value == 'hot') sub = r.getHot(edit.innerText)
  if(type.value == 'new') sub = r.getNew(edit.innerText)
  if(type.value == 'top') sub = r.getTopAllTime(edit.innerText)
  r.getTitles(sub, res=>{
    r.titles.map((title,i)=>{
      stream(clean(title))
      r.getComments(res[i], data=>{
        data.comments.map(a=> stream(clean(a.body)))
      })
    })
  })
  console.log('loading')
}

onload = _=>{
  refresh()
  type.onchange = _=>{
    refresh()
  }
  edit.onkeydown = e=>{
    edit.size = edit.value.length
  }
  edit.onkeyup = e=>{
    if(e.key == 'Enter'){
      refresh()
    }
  }
}

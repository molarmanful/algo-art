let px = new Px(out, 4)

let rng = _=> 0 | Math.random() * 256

let words = ['af', 'bd', 'ciz'].map(atov)

Array.from(Array(100), (_,y)=>{
  Array.from(Array(100), (_,x)=>{
    // px.setpx(x, y, rng(), rng(), rng())
    if(words.length && words[0].length){
      let chars = words[0].splice(0, 3)
      px.setpx(x, y, chars[0], chars[1] || 0, chars[2] || 0)
    }
    else {
      words.shift()
      px.setpx(x, y, 0, 0, 0)
    }
  })
})

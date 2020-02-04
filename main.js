let px = new Px(out, 4)

let rng = _=> 0 | Math.random() * 256

Array.from(Array(100), (_,y)=>{
  Array.from(Array(100), (_,x)=>{
    px.setpx(x, y, rng(), rng(), rng())
  })
})

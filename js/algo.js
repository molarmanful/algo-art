let clean = ws=> ws.split(/[^a-z]/ig).filter(a=> a).map(atov)

let atov = c=> [...c.toUpperCase()].map(a=>
  0 | (a.charCodeAt() - 64) * 255 / 26
)

let vtoa = n=> String.fromCharCode(Math.ceil(n * 26 / 255 + 64))

let cdecode = n=> Array.from(Array(100), (_,y)=>
    Array.from(Array(100), (_,x)=>
    Array.from(px.getpx(x, y), a=> a ? vtoa(a) : '').join``
  ).map(a=> a || ' ').join``
).join``

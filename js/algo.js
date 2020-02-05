let clean = ws=> ws.split(/[^a-z]/ig).filter(a=> a).map(atov)

let atov = c=> [...c.toUpperCase()].map(a=>
  0 | (a.charCodeAt() - 64) * 255 / 26
)

let atov = c=> [...c.toUpperCase()].map(a=>
  0 | (a.charCodeAt() - 64) * 255 / 26
)

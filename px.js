class Px {
  constructor(canvas,size=1,width=100,height=100){
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.width = this.canvas.width = width * size
    this.height = this.canvas.height = height * size
    this.size = size
  }

  getpx(x,y){
    return this.ctx.getImageData(x * this.size, y * this.size, this.size, this.size).data
  }

  setpx(x,y,r,g,b){
    this.ctx.fillStyle = `rgb(${r},${g},${b})`
    this.ctx.fillRect(x * this.size, y * this.size, this.size, this.size)
  }
}

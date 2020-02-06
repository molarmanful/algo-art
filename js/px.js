class Px {
  constructor(canvas,size=1,width=100,height=100){
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.width = this.canvas.width = width * size
    this.height = this.canvas.height = height * size
    this.size = size
  }

  clear(){
    Array.from(Array(this.width), (_,x)=>{
      Array.from(Array(this.height), (_,y)=>{
        this.setpx(x, y, 0, 0, 0)
      })
    })
  }

  getpx(x,y){
    return this.ctx.getImageData(x * this.size, y * this.size, 1, 1).data.slice(0, 3)
  }

  setpx(x,y,r,g,b){
    this.ctx.fillStyle = `rgb(${r},${g},${b})`
    this.ctx.fillRect(x * this.size, y * this.size, this.size, this.size)
  }
}

class Reddit {

  constructor(count, userAgent, clientId, clientSecret, refreshToken){
    this.api = new snoowrap({
      userAgent: userAgent,
      clientId: clientId,
      clientSecret: clientSecret,
      refreshToken: refreshToken
    })
    this.titles = []
    this.comments = []
    this.count = count
  }

  reset(){
    this.titles = []
    this.comments = []
  }

  getTopAllTime(subredditName){
    return this.api.getSubreddit(subredditName).getTop({time: 'all'})
  }

  getHot(subredditName){
    return this.api.getSubreddit(subredditName).getHot()
  }

  getNew(subredditName){
    return this.api.getSubreddit(subredditName).getNew()
  }

  getTitles(posts, callback=_=>{}){
    posts.then(response=>{
      this.titles = Array.from(Array(this.count), (_,i)=> response[i].title)
      callback(response)
    }, console.log)
  }

  getComments(post, callback=_=>{}){
    this.api.getSubmission(post.id).expandReplies({limit: 5, depth: 1}).then(response=>{
      this.comments.push(response.comments.map(a=> a.body))
      callback(response)
    }, console.log)
  }
}

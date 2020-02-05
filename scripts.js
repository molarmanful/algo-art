console.log("loaded");
const r = new snoowrap({
  userAgent: 'Firefox bot to pull comments v0.1 (by /u/iexhalepoopama)',
  clientId: '2kvhXQhGEYlcPg',
  clientSecret: 'GcytRp0II_vBlquNNyvHN5LUfC8',
  refreshToken: '29767737-adkTtnNl3PngrSGc-dhD7ni_0Z4'
});

titles = []
comments = []

getTitles('hongkong',updateTitles);

function getTitles(subredditName, callback){
	r.getSubreddit(subredditName).getTop({time: 'all'}).then(response => {
		callback(response);
		getComments(response, updateComments);
	}).catch(err=>console.log(err))

}

function getComments(resp, callback){
	console.log("get comments loaded");
	for (let i = 0; i<25;i++){
		r.getSubmission(resp[i].id).expandReplies({limit: 5, depth: 1}).then(response => callback(response)).catch(err=>console.log(err));
	}
	// r.getSubmission(resp[0].id).body.then(console.log).catch(err=>console.log);
}

function updateTitles(x){
	for (let i = 0; i<25;i++){
		titles += [x[0].title]
	}
	// console.log(titles);
}
counter = 0;
function updateComments(x, callback){
	for (let i=0; i<x.comments.length;i++){
		comments += x.comments[i].body;
	}
	counter++;
	if (counter == 24){
		console.log(comments);
	}
}

// function printComments(x){
// 	console.log
// }

// const userleft = false;
// const userWatchCatMeme = true;

// function watchTutorialCallback(callback,errorCallback){
//     if(userleft){
//         errorCallback({
//             name : "user left",
//             message : ":("
//         })
//     }else if(userWatchCatMeme){
//         errorCallback({
//             name : "user Watching Cat Meme",
//             message : "webDevSimplified < cat"
//         })
//     }else{
//         callback("thumbs up and subscribe")
//     }
// }

// watchTutorialCallback((message) => {
//     console.log("success:" + message);
// }, (error) => {
//     console.log(error.name + " " + error.message);
// })




// const userleft = false;
// const userWatchCatMeme = true;

// function watchTutorialPromise(){
//     return new Promise((resolve,reject) => {
//         if(userleft){
//                     reject({
//                         name : "user left",
//                         message : ":("
//                     })
//                 }else if(userWatchCatMeme){
//                     reject({
//                         name : "user Watching Cat Meme",
//                         message : "webDevSimplified < cat"
//                     })
//                 }else{
//                     resolve("thumbs up and subscribe")
//                 } 
//     })
// }

// watchTutorialPromise().then((message) => {
//     console.log(("success:" + message));
// }).catch((error) => {
//     console.log(error.name + " " + error.message);
// })





// fetch('https://reqres.in/api/users')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log("error"))



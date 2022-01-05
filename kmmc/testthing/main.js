console.log('yes?')
const questions = 1;
const maxtime = 300;

var Time = new Date()

if(!document.cookie.includes('ans')) {
    var lets = ''
    for(var i=0;i<questions;i++) {
        lets+='E'
    }
    document.cookie = 'ans='+lets+';time='+Time.getTime();

}


//to set a cookie "alpha"
    // document.cookie = "alpha = zero;"
//to retreive a cookie "alpha"
// document.cookie.split(';').find(row => row.startsWith('alpha=')).split('=')[1]


//to update with the proper value
function selOption(selected) {
    var qNum = selected[1]
    var ans = document.cookie.split(';').find(row => row.startsWith('ans=') || row.startsWith(' ans=')).split('=')[1]
    ans[qNum - 1] = selected[2] 
    document.cookie = 'ans='+ans
}


console.log('yes?')
const questions = 5;
const maxtime = 300;

var Time = new Date()

if(!document.cookie.includes('ans=')) {
    console.log('in here')
    var lets = ''
    for(var i=0;i<questions;i++) {
        lets+='X'
    }
    document.cookie = 'ans='+lets+';time='+Time.getTime();
} else if(document.cookie.indexOf('ans=')) {

    let temp = document.cookie.indexOf('ans=');
    if(document.cookie[temp+4] == 'E') {

        console.log('in here')
        var lets = ''
        for(var i=0;i<questions;i++) {
            lets+='X'
        }
        document.cookie = 'ans='+lets+';time='+Time.getTime();
        
    }
}


//to set a cookie "alpha"
    // document.cookie = "alpha = zero;"
//to retreive a cookie "alpha"
// document.cookie.split(';').find(row => row.startsWith('alpha=')).split('=')[1]


//to update with the proper value
function selOption(selected) {
    var qNum = parseInt(selected[1])
    var ans = document.cookie.split(';').find(row => row.startsWith('ans=') || row.startsWith(' ans=')).split('=')[1]
    ans = ans[0, qNum-1] + selected[2]+ans[qNum,ans.length]
    document.cookie = 'ans='+ans
}


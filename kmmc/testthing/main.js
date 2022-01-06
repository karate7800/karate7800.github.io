
const questions = 5;
const maxtime = 300;

var Time = new Date()
window.onload(function() {
    initSetup()
});

function initSetup() {
    if(!document.cookie.includes('ans=')) {
        console.log('in here')
        var lets = ''
        for(var i=0;i<questions;i++) {
            lets+='X'
        }
        document.cookie = 'ans='+lets+';time='+Time.getTime();
    } else if (document.cookie[document.cookie.indexOf('ans=')+4] == 'E') {
          console.log('in here')
        var lets = ''
        for(var i=0;i<questions;i++) {
            lets+='X'
        }
        document.cookie = 'ans='+lets+';time='+Time.getTime()+';';
        
    } else {
        autoFill();
    }
}


//to set a cookie "alpha"
    // document.cookie = "alpha = zero;"
//to retreive a cookie "alpha"
// document.cookie.split(';').find(row => row.startsWith('alpha=')).split('=')[1]


//to initially fill set boxes
function autoFill() {
    var x = document.cookie.split(';').find(row => row.startsWith('ans=')).substring(4);
    console.log("Autofill X: "+x);
    for(var i=0;i<questions;i++) {
        let alpha = 'q'+(i+1)+''+x[i]
        if(x[i] != 'X') {
            console.log(alpha)
            document.getElementById(alpha).checked = true;

        }
    }
        
}

//to update with the proper value
function selOption(selected) {
    var qNum = parseInt(selected[1])
    var origval = document.cookie.split(';').find(row => row.startsWith('ans=')).substring(4)
    origval = origval.substring(0, qNum-1)+selected[2] + origval.substring(qNum);


    document.cookie = 'ans='+origval+';'
    

}


    document.cookie = 'ans='+origval+';'
    


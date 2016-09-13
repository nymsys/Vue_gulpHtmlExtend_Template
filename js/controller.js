console.log("pass controller.js");

var routeDic = {
  "index.html": "indexFunc",
  "test1.html": "test1Func",
  "test2.html": "test2Func",
}

$(document).ready(function(){
  var filename = location.pathname.split("/")[location.pathname.split("/").length-1];
  if (filename in routeDic){
    funcList[routeDic[filename]]();
  } else {
    funcList[routeDic["index.html"]]();
  }
});


// partial Controller
var funcList = {};
// ***
funcList["indexFunc"] = function() {
  var demo = new Vue({  // parent vue instance
    el: '#app',
    data: {
      text: "Vue.js!!!",
      text2: "index!!"
    },
    ready: function(){
      console.log('pass ready parent'); // ToDo: remove after test
    },
    methods: {
      clear: function(){
        console.log("pass clear!");  // TODO: test naya remove after test!
      },
    }
  });
}

funcList["test1Func"] = function() {
  var demo = new Vue({  // parent vue instance
    el: '#app',
    data: {
      text: "Vue.js!!!",
      text2: "test1!!"
    },
    ready: function(){
      console.log('pass ready parent'); // ToDo: remove after test
    },
    methods: {
      clear: function(){
        console.log("pass clear!");  // TODO: test naya remove after test!
      },
    }
  });
}

funcList["test2Func"] = function() {
  var demo = new Vue({  // parent vue instance
    el: '#app',
    data: {
      text: "Vue.js!!!",
      text2: "test2!!"
    },
    ready: function(){
      console.log('pass ready parent'); // ToDo: remove after test
    },
    methods: {
      clear: function(){
        console.log("pass clear!");  // TODO: test naya remove after test!
      },
    }
  });
}
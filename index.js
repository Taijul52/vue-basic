var app = new Vue({
  el:'#app',
  data:{
    msg:'Hello Vue'
  }
})

app.msg =" Hello Everyone"

var app2 = new Vue({
  el:'#app-2',
  data:{
    message:'you load this page on ' + new Date().toLocaleString()
  }
})

app2.message= 'New load time is ' + new Date().toLocaleString()

//conditonals

var app3 = new Vue({
  el:'#app-3',
  data:{
    //show:false does't appear
    show:true //appear
  }
})

//for loop

var app4 = new Vue({
  el:'#app-4',
  data:{
    todolist:'Todo List',
    todos:[
      { 
        title:'Vue',
        text:'Vue js',
      
      },
      {  
        title:'React',
        text:'React js'
      },
      { 
        title:'Angular',
        text:'Angular js'
      }
    ]
    
  }
})

app4.todos.push({title:'CSS Framework'})

var app5 = new Vue({
  el:'#app-5',
  data:{
    msg:'Hello Vue'
  },
  methods:{
    reverseMessage: function(){
      this.msg = this.msg.split('').reverse().join('')
    }
  }
})

var app5 = new Vue({
  el:'#app-6',
  data:{
    msg:'Hello Vue'
  }
})



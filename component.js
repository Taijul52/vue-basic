///component child
Vue.component('todo-item',{
  props:['todo'],
  template: '<li> {{ todo.text }} </li>'
})


//parent

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString() //この要素の title 属性を Vue インスタンスの message プロパティによって更新して保存する
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true //console上で　app3.seen = false　を打ち込むと消える（要素の有無の切り替え）
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }　//アイテムのリストを配列内のデータを使って表示
    ]
  }
})
app4.todos.push({ text: 'new item'})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})


var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

Vue.component('todo-item' ,{
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat'}
    ]
  }
})

var vm = new Vue({
  el: '.static',
  data: {
    isActive: false,
    hasError: true
  },
})

var vm = new Vue({
  el: '.hoge',
  data:{
    isActive: true,
    error: null,
  },
  computed: {
    classObject:function(){
      return {
        active: this.isActive && !this.error,
        'text-danger':this.error && this.error.type === 'fatal'
      }
    }
  }
})

var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Chika',
    lastName: 'Watanabe'
  },
  methods: {
    greeting2: function() {
      const date = new Date()
      return `今は${date}です`
    },
  },
  computed: {
    greeting1: function() {
      const date = new Date()
      return `今は${date}です`
    },
    fullName: {
      get: function () { //算出プロパティ
        return this.firstName + ' ' + this.lastName
      },
      set: function(newValue){ //算出プロパティ
        var names = newValue.spilit(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
     }
    }
  })

  Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

var app9 = new Vue ({
  el: '#conponents-demo' });

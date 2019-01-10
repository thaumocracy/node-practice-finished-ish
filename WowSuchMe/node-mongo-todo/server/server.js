const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/TodoApp'
mongoose.Promise = global.Promise

mongoose.connect(databaseUrl)


const Todo = mongoose.model('Todo',{
    text : {
        type: String
    },
    completed :{
        type:Boolean
    },
    completedAt : {
        type: Number
    }
})


let newTodo = new Todo({
    text:'Something  elseto do',
    completed:true,
    completedAt: Date.now()
})

newTodo.save().then((data) => {
    console.log('Saving : ', data)
},(error) => {
    console.log("Unable to save")
})
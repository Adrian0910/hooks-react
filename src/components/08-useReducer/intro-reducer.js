
const initialState = [{
    id: 1,
    todo: 'Comprar leche',
    done: false,
}];

const todoReducer = (state = initialState, action) => {

    //to process new action
    if(action?.type === 'agregar'){
        return [...state, action.payload];
    }
    
    return state;
}
let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar pan',
    done: false,
}

// new action
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo,
}

todos = todoReducer( todos, agregarTodoAction );

console.log(todos)


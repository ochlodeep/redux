import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList


// class VisibleTodoList extends Component {
//   componentDidMount() {
//     const { store } = this.props;
//     this.unsubscribe = store.subscribe(() => this.forceUpdate())
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//     render() {
//         const { store } = this.props;
//         const props = this.props;
//         const state = store.getState();
//
//         return (
//             <TodoList todos={getVisibleTodos(state.todos, state.visibilityFilter)}
//                   onTodoClick={id => store.dispatch({
//                       type: 'TOGGLE_TODO',
//                       id
//                   })}
//               />
//         );
//     }
// }

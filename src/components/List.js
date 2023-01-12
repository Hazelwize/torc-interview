const List = ({addTask,moveLeft, moveRight, userId, user}) => {
    return(
        <section className='list__section'>
            <h2 className='list__name'>{user.name}</h2>
            <ul className='list__todos'>
                {user.todos.map((todo,i) => {
                    return(
                        <li className='list__items'>
                            <span className='arrows' onClick={() => moveLeft(userId,i)}>{'<'}</span>
                            <span>{todo}</span>
                            <span className='arrows' onClick={() => moveRight(userId,i)}>{'>'}</span>
                        </li>
                    )
                })}
            </ul>

            <button className='btn' onClick={()=>{
                let todo = window.prompt('Please enter an item todo:')
                if(todo !== null){
                    addTask(userId, todo)
                }
            }}
            type="button">Add Task</button>
        </section>
    )
}

export default List
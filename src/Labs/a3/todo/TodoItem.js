const TodoItem = (
    {
        task = {
            done: true,
            title: 'Buy milk',
            status: 'COMPLETED'
        }
    }) => {
    return (
        <li className="list-group-item">
            <input type="checkbox"
                defaultChecked={task.done} />
            &nbsp;
            {task.title}
            ({task.status})
        </li>
    );
}
export default TodoItem;
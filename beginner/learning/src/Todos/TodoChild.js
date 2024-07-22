function TodoChild(props) {
        
    return (
        <div> 
            <ol>
                <li>Task 1</li>
                {JSON.stringify(props)}
            </ol>
        </div>
    )
}

export default TodoChild;
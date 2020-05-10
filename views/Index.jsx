const React = require('react');

class Index extends React.Component {
    render() {
        const {todos} = this.props;

        const toDoList = todos.map((item, index) => {
            return(
                <li>
                    <p>{item.todo}—{item.done ? 'Done' : 'Not Done'}</p>
                    <form action={`/todos/${item._id}?_method=DELETE`} method="POST" style={{display: 'inline'}}><input type="submit" value="delete"></input></form>
                </li>
            )
        })

        return (
                <html lang="en">
                <head>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="stylesheet" href="/main.css"/>
                    <title>To-Do List</title>
                </head>
                <body>
                    <h1>To-do List</h1>
                    {!todos.length ? <h3>There are no to-dos yet!</h3> : null }
                    <ul>{toDoList}</ul>
                    <hr/>
                    <form action="/todos" method="POST">
                        <input type="text" name="todo" required/>
                        <input type="submit"/>
                    </form>
                </body>
                </html>
        )
    }
}

module.exports = Index;
# Command Line Todo List

A small node todo-list that runs from the command line.

## Usage
- To add tasks:

```
$ node task.js add "Buy milk"
Created task 1.

$ node task.js add "Buy eggs"
Created task 2.

$ node task.js add "Bake cake"
Created task 3.

$ node task.js add "Put groceries in the fridge"
Created task 4.
```

- To view incomplete tasks:

```
$ node task.js list

ID Description
-- -----------
1  Buy milk
2  Buy eggs
3  Bake cake
4  Put groceries in the fridge

4 tasks.
```

- To complete a task: 
```
$ node task.js done 1
Completed the task 'Buy milk'

$ node task.js done 3
Completed the task 'Buy cake'

$ node task.js list

ID Description
-- -----------
2  Bake eggs
4  Put groceries in the fridge

2 tasks.
```


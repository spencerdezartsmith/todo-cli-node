const fs = require('fs')
const taskPath = __dirname + '/../task.json'

module.exports = function(description) {
  fs.readFile(taskPath, 'utf8', (error, json) => {
    if (error) throw error
    let data = JSON.parse(json)
    const newTaskID = data.task_count + 1

    let newTask = {
      id: newTaskID,
      description: description,
      completed: false
    }

    data.tasks.push(newTask)
    data.task_count = newTaskID

    json = JSON.stringify(data)

    fs.writeFile(taskPath, json, function(error) {
      if (error) throw error
      console.log(`Created task ${newTaskID}`)
    })
  })
}

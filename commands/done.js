const fs = require('fs')
const taskPath = __dirname + '/../task.json'

module.exports = (id) => {
  id = Number.parseInt(id)

  fs.readFile(taskPath, 'utf8', (error, json) => {
    if (error) throw error
    data = JSON.parse(json)
    let task = data.tasks.find(task => task.id === id)
    let updatedTasks = data.tasks.filter(task => task.id !== id)
    data.tasks = updatedTasks
    json = JSON.stringify(data)

    fs.writeFile(taskPath, json, (err) => {
      if (error) {
        console.log(`There was no task with the ID ${id}`)
      } else {
        console.log(`Completed the task ${task.description}`)
      }
    })
  })
}

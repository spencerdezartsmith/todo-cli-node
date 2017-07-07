const fs = require('fs')
const taskPath = __dirname + '/../task.json'

module.exports = () => {
  fs.readFile(taskPath, (error, json) => {
    if (error) throw error
    const data = JSON.parse(json)

    console.log('\n')
    console.log('ID Description')
    console.log('-- -----------')
    data.tasks.forEach(task => {
      console.log(`${task.id}   ${task.description}`)
    })
    console.log('\n')
    console.log(`${data.tasks.length} tasks.`)
  })
}

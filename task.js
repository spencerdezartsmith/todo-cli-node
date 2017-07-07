const fs = require('fs')
const add = require('./commands/add')
const done = require('./commands/done')
const list = require('./commands/list')

const command = process.argv[2]
const argument = process.argv[3]

switch (command) {
  case 'add':
    add(argument)
    break
  case 'done':
    done(argument)
    break
  case 'list':
    list()
    break
  default:
    console.log('Please enter a vaild command')
    break
}

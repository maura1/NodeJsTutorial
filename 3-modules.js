//Modules - Encapsulated Code (only share minimum). We can decide what we want to share
//CommonJs, every file is a module (by default)

const names = require('./4-names')
const sayHi = require('./5-utils')

const data = require('./6-alternative-flavour')
//console.log(data)

require('./7-mind-grenade')


/*sayHi('mo')
sayHi(names.maura)
sayHi(names.peter)*/
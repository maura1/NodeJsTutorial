//Globals --NO WINDOW!!!! In node there is no window as there is no browser.

//__dirname - Path to the current directory
//__filename - filename
// require o function to use modules(CommonJS)
//module - info about current module (file)
// process - ifnor about env(environment) where the program is being executed.


console.log(__dirname)

setInterval(()=>{
    console.log('Hello world!')
},1000)
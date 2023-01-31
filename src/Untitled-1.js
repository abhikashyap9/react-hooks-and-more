


console.log([10]===[10])
let a={
    ac:1
}
let b={
    a:1
}
console.log(a.ac===b.a)
console.log(a.ac)
console.log(b.a)

const depCompare=(oldDeps,newDeps)=>
    oldDeps.length === newDeps.length && oldDeps.every((dep,i)=>dep===newDeps[i])


console.log(depCompare([],[]))


function swatch(color){
    console.log(`swatch rendered ${color}`)
    return `swatch ${color}`
}
swatch("red")
swatch("pink")




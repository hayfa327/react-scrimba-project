
const nums = [1, 2, 3, 4, 5]
const numsArray = nums.map(num => {  num * num 
})

console.log(numsArray)




const names = ["haifa", "samira", "charkie"]
const namesFirst = names.map(letter => { letter[0].toUpperCase() + letter.slice(1)
}
)
console.log(namesFirst)




const pokemon = ["Bullo", "Chillo", "dipoo"]

const Newpokemon = pokemon.map(
  (pok) => {
    return `<p>${pok}<p/>`
  }
)

console.log(Newpokemon )
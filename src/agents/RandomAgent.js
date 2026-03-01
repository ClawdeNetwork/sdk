const BaseAgent = require("./BaseAgent")

class RandomAgent extends BaseAgent{

 act(){

  const actions = [
   "attack",
   "defend",
   "charge"
  ]

  const index = Math.floor(Math.random()*actions.length)

  return actions[index]

 }

}

module.exports = RandomAgent

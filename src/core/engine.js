const BattleEngine = require("../battles/battleEngine")
const RandomAgent = require("../agents/RandomAgent")

class Engine {

 runBattle(){

  const agentA = new RandomAgent("Agent Alpha")
  const agentB = new RandomAgent("Agent Beta")

  return BattleEngine.fight(agentA,agentB)

 }

}

module.exports = Engine

class BattleEngine {

 static fight(agentA,agentB){

  const moveA = agentA.act()
  const moveB = agentB.act()

  return {

   agentA: agentA.name,
   actionA: moveA,

   agentB: agentB.name,
   actionB: moveB,

   winner: BattleEngine.resolve(moveA,moveB)

  }

 }

 static resolve(a,b){

  if(a === b)
   return "draw"

  if(a === "attack" && b === "charge")
   return "agentA"

  if(b === "attack" && a === "charge")
   return "agentB"

  return Math.random() > 0.5 ? "agentA":"agentB"

 }

}

module.exports = BattleEngine

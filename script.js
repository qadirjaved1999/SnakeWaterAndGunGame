//Create a sanke, water and Gun Game in JavaScript
//The game should ask you to enter S, W or G The computer should be able to randomly generate S, W or G and declare win or loss using alert...
//Use alert, prompt and confirm whereever!

let user = prompt("Enter S W OR G");
let cpuI = Math.floor(Math.random() * 3);
console.log(cpuI);
let cpu = ["S", "W", "G"][cpuI];

const match = (cpu, user) =>{
  if(cpu === user){
    return "Nobody";
  }
  else if(cpu === "S" && user ==="W"){
    return "cpu";
  }
    else if(cpu === "S" && user ==="G"){
    return "user";
  }
  else if(cpu === "G" && user ==="W"){
    return "user";
  }
  else if(cpu === "G" && user ==="S"){
    return "cpu";
  }
  else if(cpu === "W" && user ==="S"){
    return "user";
  }
  else if(cpu === "W" && user ==="G"){
    return "cpu";
  }
}
let result = match(cpu, user);
document.write(`CPU:${cpu} <br> User:${user} <br> The winner is:   ${result.toUpperCase()}`)


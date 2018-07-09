var counter = 1;


function takeANumbe(line){
  line.push(counter);
  var result =`Welcome! You're ticket number # ${counter}`;
  
  counter++;
  
  return result;
}

// takeANumber(line) => "Welcome! You're ticket number #1" [1]
// takeANumber(line) => "Welcome! You're ticket number #2" [1, 2]

// nowServing(line) => "Currently serving: #1" [2]
// nowServing(line) => "Currently serving: #2" []

// takeANumber(line) => "Welcome! You're ticket number #3" [3]


function takeANumber(line,nPerson)
{
  line.push(nPerson);
  
  return `Welcome, ${nPerson}. You are number ` + line.length+ " in line.";
}

function nowServing(line){
  if (line.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    var first = line[0];
    line.shift();
    return `Currently serving ${first}.`;
  }
}

function currentLine(line){
  var listLine= "The line is currently:";
  
  if (line.length === 0)
    return "The line is currently empty.";
  else{
    for(var i = 0; i < line.length; i++)
    {
      listLine += ` ${i+1}. ` + line[i] + ",";
    }
  }
  
  listLine = listLine.slice(0,-1);
  return listLine;
}
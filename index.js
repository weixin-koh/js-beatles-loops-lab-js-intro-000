function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return array;
}


function johnLennonFacts(facts) {
  var counter = 0;

  while (counter < facts.length) {
    facts[counter] = facts[counter] + "!!!";
    counter++;
  }

  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  var diff = 15;

  do {
    array.push("I love the Beatles!");
    number++;
    diff = 15 - number;
  } while (diff != 0);

  return array;
}

// Tarun - 23/11/2020
// isTouching algorithm

function isTouching(object1,object2){
    if (object1.body.position.x - object2.body.position.x < object2.body.width/2 + object1.body.width/2
      && object2.body.position.x - object1.body.position.x < object2.body.width/2 + object1.body.width/2
      && object1.body.position.y - object2.body.position.y < object2.body.height/2 + object1.body.height/2
      && object2.body.position.y - object1.body.position.y < object2.body.height/2 + object1.body.height/2) {
  return true;
  }
  else {
    return false;
  }
  }


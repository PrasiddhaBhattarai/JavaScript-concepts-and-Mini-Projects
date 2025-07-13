// business name generator

/* create a business name generator by combining list of adjectives and shop name and another word

  adjectives:
  Crazy 
  Amazing 
  Fire

  shop name:
  Engine 
  Foods
  Garments

  another name:
  Bros 
  Limited
  Hub
*/

const adjectives = {
    0 : "Crazy",
    1 : "Amazing",
    2 : "Fire"
  };
  
  const shopName = {
    0 : "Engine",
    1 : "Foods",
    2 : "Garments"
  };
  
  const anotherName = {
    0 : "Bros",
    1 : "Limited",
    2 : "Hub"
  };
  
  let w1 = Math.floor(Math.random()*3);
  let w2 = Math.floor(Math.random()*3);
  let w3 = Math.floor(Math.random()*3);
  
  console.log(`${adjectives[w1]} ${shopName[w2]} ${anotherName[w3]}`);
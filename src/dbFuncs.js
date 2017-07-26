import firebase from 'firebase';

const db = firebase.database();

let dogsRef = db.ref('dogs');
let catsRef = db.ref('cats');

export function fetchDogs() {
  // dogsRef.on('value', snapshot => {
  //   return snapshot.val();
  // });
  
  const fbMockDogs = [
    {id: 0, name: "buster", image: "www.image.com"},
    {id: 1, name: "canoli", image: "www.image.com"},
    {id: 2, name: "thomas", image: "www.image.com"},
    {id: 3, name: "robert", image: "www.image.com"},
    {id: 4, name: "killer", image: "www.image.com"},
];

return fbMockDogs;
}

export function fetchCats() {
  // catsRef.on('value', snapshot => {
  //   return snapshot.val();
  // });
  
  const fbMockCats = [
    {id: 0, name: "frisky", image: "www.image.com"},
    {id: 1, name: "terrence", image: "www.image.com"},
    {id: 2, name: "mini", image: "www.image.com"},
    {id: 3, name: "kay", image: "www.image.com"},
    {id: 4, name: "mr bigglesworth", image: "www.image.com"},
  ];

  return fbMockCats;

}

export function addAnimal(name, imgUrl, animal) {
  if (animal === "Dogs") {
    return dogsRef.push({
      name,
      imgUrl,
    })
  } else {
    return catsRef.push({
      name,
      imgUrl,
    })
  }
}
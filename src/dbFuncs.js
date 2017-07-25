import firebase from 'firebase'

export function fetchDogs () {
  let dogsRef = firebase.database().ref('dogs').orderByKey();
  dogsRef.on('value', snapshot => {
    return snapshot.val();
  });
}

export function fetchCats () {
  let catsRef = firebase.database().ref('cats').orderByKey();
  catsRef.on('value', snapshot => {
    return snapshot.val();
  });
}

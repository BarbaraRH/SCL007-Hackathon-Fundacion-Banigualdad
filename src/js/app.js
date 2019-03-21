
let newBusinessKey = firebase.database().ref('users/boasfdisfbsfahb').child('products').push().key;
console.log(newBusinessKey);

firebase.database().ref('users/' + newBusinessKey).set({
  campo: newBusinessKey
})



/* let newBusinessKey = ""; */
const saveBusiness = (/* businessImage, */ businessName, businessDescription, businessCategory, businessPhone, businessCity) => {
  /* let */ newBusinessKey = firebase.database().ref('business/boasfdisfbsfahb').child('products').push().key;
  console.log(newBusinessKey);
  firebase.database().ref('business/' + newBusinessKey).set({
    /* image: businessImage, */
    owner: businessName,
    description: businessDescription,
    key: newBusinessKey,
    category: businessCategory,
    phone: businessPhone,
    city: businessCity
  });
};

/* function onLikeClick(e) {
  let key = e.target.id;
  let oriKey = e.target.oid;
  let numberKey = e.target.nid;
  document.getElementById(key).style.background = "lightblue";
  firebase.database().ref(`recipe/${oriKey}`).child(`likes/${firebase.auth().currentUser.uid}`).set({
    user: firebase.auth().currentUser.uid,
  });
  firebase.database().ref(`recipe/${oriKey}`).child("likes").on("value", function (snapshot) {
    firebase.database().ref(`recipe/${oriKey}`).update({
      likesCount: snapshot.numChildren(),
    })
    console.log("There are " + snapshot.numChildren() + " likes");
    document.getElementById(numberKey).innerHTML = "";
    document.getElementById(numberKey).innerHTML = snapshot.numChildren();
  });
} */


var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');
let imgUrl = "";

fileButton.addEventListener('change', function (e) {
  var file = e.target.files[0];
  var storageRef = firebase.storage().ref('Img/'
    + file.name);
  var task = storageRef.put(file);
  task.on('state_changed',
    function progress(snapshot) {
      var percentage = (snapshot.bytesTransferred /
        snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },
    function error(err) {
    },
    function complete() {
    }
  );
  storageRef.getDownloadURL().then(function (url) {
    console.log(newBusinessKey);
    console.log(url);
    imgUrl = url;
    /* firebase.database().ref(`recipe/${newRecipeKey}`).update({
        urlImage : url 
      });*/
    // Insert url into an <img> tag to "download"
  }).catch(function (error) {

    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;

      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;

      case 'storage/canceled':
        // User canceled the upload
        break;

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });
})



const saveBusinessIntoDatabase = () => {
  /* const businessImage = imgURL; */
  const businessName = document.getElementById("name").value;
  const businessDescription = document.getElementById("description").value;
  const businessCategory = document.getElementById("category").value;
  const businessPhone = document.getElementById("phone").value;
  const businessCity = document.getElementById("city").value;
  /* const recipeTitle = titleRecipe.value;
  const recipeImage = imgUrl;
  const ownerName = firebase.auth().currentUser.email; */
  saveBusiness(/* businessImage, */ businessName, businessDescription, businessCategory, businessPhone, businessCity);
}

document.getElementById("sendBusiness").addEventListener('click', saveBusinessIntoDatabase);






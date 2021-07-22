
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBDghbh6jC3vzYR6H161Kabod8-bEoXYcQ",
      authDomain: "kwitterthefaketwitter.firebaseapp.com",
      projectId: "kwitterthefaketwitter",
      storageBucket: "kwitterthefaketwitter.appspot.com",
      messagingSenderId: "438275567210",
      appId: "1:438275567210:web:af9c5099bb65e34dc42413"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();

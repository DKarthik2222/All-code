console.clear();
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
document.getElementById("signupShift").onclick = () => {
  div1.style.animation = "bf alternate 2s forwards";
  div2.style.animation = "fb alternate 2s forwards";
};
document.getElementById("loginShift").onclick = () => {
  div1.style.animation = "fb alternate 2s forwards";
  div2.style.animation = "bf alternate 2s forwards";
};
var firebaseConfig = {
  apiKey: "AIzaSyAzOG1iFYpZbsNwBXmOQWLigamEnzelr8k",
  authDomain: "beginning-c6b04.firebaseapp.com",
  projectId: "beginning-c6b04",
  storageBucket: "beginning-c6b04.appspot.com",
  messagingSenderId: "892804460350",
  appId: "1:892804460350:web:0bf5e186fc8165a7e4066f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
var storage = firebase.storage();
var uploadBtn = document.getElementById("file");
const register = document.getElementById("input-wrapper2");
register.addEventListener("submit", function (e) {
  e.preventDefault();
  const uName = document.getElementById("uName").value;
  const emailReg = document.getElementById("emailReg").value;
  const passwordReg = document.getElementById("createPassword").value;
  const confPasswordReg = document.getElementById("confPassword").value;
  if (passwordReg == confPasswordReg && emailReg != "") {
    firestore
      .doc(`users/${emailReg}`)
      .set({
        uName: uName,
        email: emailReg,
        password: passwordReg,
      })
      .then(function () {
        console.log("successfull");
      })
      .catch(function () {
        console.log("ohhh nooo");
      });
  } else {
    alert("please enter confirm password same");
  }
});
var status = 0;
uploadBtn.onclick = (e) => {
  if (document.getElementById("emailReg").value != "") {
    setInterval(function () {
      if (document.getElementById("file").value) {
        status++;
        uploadFun();
      }
    }, 0);
  } else {
    alert("Fill input fields first!!");
    e.preventDefault();
  }
};
uploadFun = () => {
  if (status == 1) {
    const emailReg = document.getElementById("emailReg").value;
    uploadBtn.style.display = "none";
    document.getElementById("progressBar").style.display = "block";
    const uploadFile = uploadBtn.files[0];
    var metadata = {
      filetype: uploadFile.type,
    };
    var task = storage
      .ref()
      .child(`images/${emailReg}`)
      .put(uploadFile, metadata);
    task.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
      var progress = parseInt(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      document.getElementById("percentage").innerHTML = `${progress}%`;
      document.getElementById("progressBarFull").style.width = `${progress}%`;
      console.log("Upload is " + progress + "% done");
    });
  }
};
// get
const login = document.getElementById("input-wrapper");
login.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let ref = firestore.doc(`users/${email}`);
  ref
    .get()
    .then(function (doc) {
      if (doc.exists) {
        const data = doc.data();
        if (data.password == password) {
          alert("Login successful!!");
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
        } else {
          alert("please enter correct password");
        }
      } else {
        // doc.data() will be undefined in this case
        alert("Your email is not registered!");
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
});
//   var task = storage.ref().child(`images/${name}`).put(uploadFile, metadata);

//   storage
//     .ref()
//     .child(`images/SONGS`)
//     .getDownloadURL()
//     .then(function (url) {
//       console.log(url);
//     })
//     .catch(function (error) {
//       console.log("error occured", error);
//     });
// });

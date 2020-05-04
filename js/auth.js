// listen for auth status changes
auth.onAuthStateChanged((user) => {
  if (user) {
    db.collection("doctors")
      .get()
      .then((snapshot) => {
        setupGuides(snapshot.docs);
      });
  } else {
    setupGuides([]);
  }
});

// signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  // const username = signupForm['signup-username'].value;
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    // close the signup modal & reset form
    const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

// logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut();
});

// login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    const modal = document.querySelector("#modal-login");
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});

//google authe
googleSignIn = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
    });
};

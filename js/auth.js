// listen for auth status changes
auth.onAuthStateChanged((user) => {
  if (user) {
    db.collection("doctors")
      .get()
      .then((snapshot) => {
        setupGuides(snapshot.docs);
        //UI element call
        setupUI(user);
        sigUpUI(user);
        hideShowNumber(user);
      });
  } else {
    setupUI();
    sigUpUI();
    // hideShowNumber();
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
googleSignUp = () => {
  // Using a redirect.
  firebase
    .auth()
    .getRedirectResult()
    .then(function (result) {
      if (result.credential) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
        M.Modal.getInstance(modal).close();
        signupForm.reset();
      }
      var user = result.user;
    });

  // Start a sign in process for an unauthenticated user.
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  firebase.auth().signInWithRedirect(provider);
};

googleSignIn = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      M.Modal.getInstance(modal).close();
      loginForm.reset();
      // This gives you a Google Access Token.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
    });
};

//facebook authe
faceBookSignUp = () => {
  // Sign in using a redirect.
  firebase
    .auth()
    .getRedirectResult()
    .then(function (result) {
      if (result.credential) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
      }
      var user = result.user;
    });
  // Start a sign in process for an unauthenticated user.
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope("user_birthday");
  firebase.auth().signInWithRedirect(provider);
};

faceBookSignIn = () => {
  // Sign in using a popup.
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope("user_birthday");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Facebook Access Token.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
    });
};

// given the array,
//  print the first name, last name, email, and image (src of image is the "avatar" value of each object)
//  on to the screen (Give the hosted and Github Link)
const userList = [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
    },
  ];
  
  // function appendData(userList) {
  //   let a = "";
  //   var mainContainer = document.getElementById("users");
  //   userList.forEach((element) => {
  //     console.log(element);
  //     a += "<button></button>"
  //     a += " Email: " + element.email;
  //   });
  //   mainContainer.innerHTML = a;
  // }
  
  function appendData(userList) {
    var mainContainer = document.getElementById("users");
    for (let i = 0; i < userList.length; i++) {
      // console.log(userList[i].first_name);
  
      // main container
      let userDiv = document.createElement("div");
  
      // user-mail
      let createMail = document.createElement("h1");
      createMail.innerHTML = "Email:" + userList[i].email;
     
      // first - name
      let createFirstName =  document.createElement("h1");
      createFirstName.innerHTML =  "First Name:" + userList[i].first_name;
  
      // user - image
      let image = document.createElement("img");
      image.src = userList[i].avatar;
  
      userDiv.appendChild(createMail);
      userDiv.appendChild(createFirstName);
      userDiv.appendChild(image);
  
      mainContainer.appendChild(userDiv);
    }
  }
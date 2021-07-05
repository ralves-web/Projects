    import firebase from 'firebase';

    const firebaseConfig = {
        apiKey: "AIzaSyDNwug1vt0RIK9ZgKW0iNjXA6iCaaT8Iqo",
        authDomain: "project-alest-crud.firebaseapp.com",
        projectId: "project-alest-crud",
        storageBucket: "project-alest-crud.appspot.com",
        messagingSenderId: "333925748314",
        appId: "1:333925748314:web:fa05478690c8c206891263"
    };

    let fireDb = firebase.initializeApp(firebaseConfig);

    export default fireDb.database().ref()
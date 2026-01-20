// Firebase Config (Replace with your config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const auth = firebase.auth();

    auth.signInAnonymously().catch(error => {
        console.error('Auth Error:', error);
        alert('Login failed.');
    });

    // PeerJS for Streaming
    const peer = new Peer();
    let localStream;
    let currentCall;

    peer.on('open', id => console.log('ID:', id
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBCuFjXCU6H4ICZ7gEJ1b9qgz-UdeGz4II',
  authDomain: 'hendraaagil-my-plan.firebaseapp.com',
  databaseURL: 'https://hendraaagil-my-plan.firebaseio.com',
  projectId: 'hendraaagil-my-plan',
  storageBucket: 'hendraaagil-my-plan.appspot.com',
  messagingSenderId: '865436281863',
  appId: '1:865436281863:web:a2769edb50cc3527f90ea2',
  measurementId: 'G-VQ1ERVBN4K',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

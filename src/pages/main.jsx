import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Main = () => {
  const [count, setcound] = useState(0);
  const { currentUser } = useAuth();
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const fetchUserName = async () => {
      if (currentUser) {
        try {
          // Initialize Firestore
          const db = getFirestore();

          // User is signed in, get their uid
          const uid = currentUser.uid;

          // Reference to the user's document in Firestore
          const userDocRef = doc(db, 'users', uid);

          // Fetch the user document
          const userDoc = await getDoc(userDocRef);

          // Check if the document exists and extract the user's name
          if (userDoc.exists()) {
            const userName = userDoc.data().name; // Ensure your document has a "name" field
            setUserName(userName);
            console.log('User Name:', userName);
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching user document:', error);
        }
      } else {
        // No user is signed in
        console.log('No user is signed in');
      }
    };

    fetchUserName();
  }, [currentUser]);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const counter = () => {
    setcound(count + 1)
  }

  return (
    <div className='center'>

<h2>Welcome, {userName}</h2>

      <div className="app">
      
        <div className="body">

          <div className="phone">

            <div className="menu">
              <div className="time">4:30</div>
              <div className="icons">
                <div className="network"></div>
                <div className="battery"></div>
              </div>
            </div>

            <div className="content">

              <div className="circle">{count}
              </div>


              <div className='switch' onClick={counter}>
                ADD +1
              </div>




            </div>

          </div>
        </div>

      </div>





      <div className="app">
     
        <div className="body">

          <div className="phone">

            <div className="menu">
              <div className="time">4:20</div>
              <div className="icons">
                <div className="network"></div>
                <div className="battery"></div>
              </div>
            </div>

            <div className="content">

              <div className="circle">{count}
              </div>


              <div className='switch' onClick={counter}>
                ADD +1
              </div>




            </div>

          </div>
        </div>

      </div>







    </div>
  );
};

export default Main;

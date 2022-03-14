import { auth, firestore } from "../lib/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth as any);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe = null;

    if (user) {
      const ref = firestore.collection("users").doc(auth.currentUser.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
      });
      console.log(typeof unsubscribe);
    } else {
      setUsername(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, username };
}

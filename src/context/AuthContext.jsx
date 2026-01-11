import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

// 1️⃣ Create context
const AuthContext = createContext(null);

// 2️⃣ Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      const ref = doc(db, "users", currentUser.uid);
      const snap = await getDoc(ref);

      setUser({
        uid: currentUser.uid,
        email: currentUser.email,
        ...snap.data(),
      });
    } else {
      setUser(null);
    }

    setLoading(false);
  });

  return () => unsubscribe();
}, []);

  // 5️⃣ Logout function
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// 6️⃣ Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};

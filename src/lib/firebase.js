import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDmf_hxomlLEJDbPKLWaB9Y3eMXiDm7MuE",
  authDomain: "ever-group-d8641.firebaseapp.com",
  projectId: "ever-group-d8641",
  storageBucket: "ever-group-d8641.firebasestorage.app",
  messagingSenderId: "580236558761",
  appId: "1:580236558761:web:4e64feb64f3688002484b8",
  measurementId: "G-1N3Z661VQ2",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export { app };

export async function initAnalytics() {
  const supported = await isSupported();
  if (supported) {
    const analytics = getAnalytics(app);
    return analytics;
  }
  return null;
}

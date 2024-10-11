import { FirebaseError, initializeApp } from "firebase/app";
import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
  User,
  signOut,
} from "firebase/auth";
import {
  ConfirmResetPasswordProps,
  CreateUser,
  ResetPasswordEmailProps,
  SignInUser,
} from "./types";
import toast from "react-hot-toast";
import { LINKS } from "shared/enums";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const domen = import.meta.env.VITE_DOMEN_URL;

class Firebase {
  private app;
  private auth;
  private currentUser: User | null = null;
  private authStateReady: boolean = false;

  constructor(config: any) {
    this.app = initializeApp(config);
    this.auth = getAuth(this.app);

    this.setAuthPersistence();

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
      this.authStateReady = true;
    });
  }

  private async setAuthPersistence() {
    try {
      await setPersistence(this.auth, browserLocalPersistence);
    } catch (error) {
      console.error("Error setting auth persistence:", error);
    }
  }

  public async createUser({ email, password, callback }: CreateUser) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      if (userCredential.user) {
        callback(true);
      }
    } catch (error: unknown) {
      console.error(error);
      callback(false);

      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/email-already-in-use":
            toast.error(
              "This email is already in use. Please use a different email."
            );
            break;
          case "auth/invalid-email":
            toast.error(
              "The email address is not valid. Please enter a valid email."
            );
            break;
          case "auth/operation-not-allowed":
            toast.error("Operation not allowed. Please contact support.");
            break;
          case "auth/weak-password":
            toast.error(
              "The password is too weak. Please enter a stronger password."
            );
            break;
          default:
            toast.error("An unexpected error occurred. Please try again.");
        }
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  }

  public async signIn({ email, password, callback }: SignInUser) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      if (userCredential.user) {
        callback(true);
      }
    } catch (error: unknown) {
      callback(false);
      console.error(error);

      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/user-not-found":
            toast.error("This user does not exist. Please sign up first.");
            break;
          case "auth/wrong-password":
            toast.error("Incorrect password. Please try again.");
            break;
          case "auth/too-many-requests":
            toast.error("Too many attempts. Please try again later.");
            break;
          default:
            toast.error("Email or password is wrong.");
        }
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  }

  public getUser() {
    return this.currentUser;
  }

  public async getToken() {
    while (!this.authStateReady) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    const user = this.currentUser;
    if (user) {
      try {
        const token = await user.getIdToken();
        return token;
      } catch (error) {
        console.error("Error getting token:", error);
        return null;
      }
    } else {
      console.error("No authenticated user found.");
      return null;
    }
  }

  public async resetPasswordEmail({ email }: ResetPasswordEmailProps) {
    const actionCodeSettings = {
      url: `${domen}${LINKS.login}`,
      handleCodeInApp: true,
    };
    await sendPasswordResetEmail(this.auth, email, actionCodeSettings);
  }

  public async confirmResetPassword({
    newPassword,
    code,
  }: ConfirmResetPasswordProps) {
    await confirmPasswordReset(this.auth, code, newPassword);
  }

  public async signOut() {
    try {
      await signOut(this.auth);
      toast.success("Successfully signed out.");
    } catch (error) {
      console.error("Error signing out: ", error);
      toast.error("Error signing out. Please try again.");
    }
  }
}

export default new Firebase(firebaseConfig);

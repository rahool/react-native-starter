import { AsyncStorage } from "react-native";
import { GoogleSignin } from 'react-native-google-signin';
import { setItem } from './StorageService';

GoogleSignin.configure();

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("ownerEmail")
      .then(res => {
        if (res !== null) {
            console.log("ownerEmail:", res);
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export const signOut = async () => {
    try {
      await setItem('userInfo', null);
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };

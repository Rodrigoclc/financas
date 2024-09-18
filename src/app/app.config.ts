import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"gestao-financeira-36985","appId":"1:1032977955413:web:aa43ef115ec71e576872dc","databaseURL":"https://gestao-financeira-36985-default-rtdb.firebaseio.com","storageBucket":"gestao-financeira-36985.appspot.com","apiKey":"AIzaSyBCd4iTj0n0BU93lqZDPuEHMh8mWgkEGRw","authDomain":"gestao-financeira-36985.firebaseapp.com","messagingSenderId":"1032977955413","measurementId":"G-NVL2HJXQ8B"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};

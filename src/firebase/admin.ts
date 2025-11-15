import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
    const apps = getApps();

    if (!apps.length) {
        initializeApp({
            credential: cert({
                projectId: process.env.FIRE_BASE_PROJECT_ID,
                clientEmail: process.env.FIRE_BASE_CLIENT_MAIL,
                // Replace newlines in the private key
                privateKey: process.env.FIRE_BASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            }),
        });
    }

    return {
        auth: getAuth(),
        db: getFirestore(),
    };
}

export const { auth, db } = initFirebaseAdmin();
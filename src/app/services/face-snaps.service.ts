import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

    faceSnaps: FaceSnap[] = [
        {
            id: 0,
            title: "Voluk66",
            description: "Votre Streamer Préféré",
            imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/a2fa8148-8700-4b0c-867f-fb035a4aa0c8-profile_image-300x300.png",
            createdDate: new Date(),
            snaps: 18,
            location: "Laval"
        },
        {
            id: 1,
            title: "CaineghisTV",
            description: "Votre Streamer Angoissé Préféré",
            imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/4bb73683-d31a-4343-ae43-571fbab5e0b2-profile_image-70x70.png",
            createdDate: new Date(),
            snaps: 15,
            location: "Rivesalte"
        },
        {
            id: 2,
            title: "SohanSoso",
            description: "Votre Streamer Défoncé préféré",
            imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/759b5766-3420-4a02-b12c-42479c6f2488-profile_image-70x70.png",
            createdDate: new Date(),
            snaps: 2
        }, 
        {
            id: 3,
            title: "Ava Naru",
            description: "Votre Streamer Mh Préféré",
            imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/44be8fe8-f419-466e-86e8-f27ebd8383c6-profile_image-70x70.png",
            createdDate: new Date(),
            snaps: 12,
            location: "Mulhouse"
        },
        {
            id: 4,
            title: "Camillexique",
            description: "Votre Streamer Licorne Préféré",
            imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/95eff888-148e-408b-8d58-e2a13f17eabf-profile_image-70x70.png",
            createdDate: new Date(),
            snaps: 11,
            location: "Orléans"
        },
        {
            id: 5,
            title: "TitAbeille",
            description: "Votre butineur de pollen préféré",
            imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/3dde15d8-4362-46fa-baeb-8a3a8ccd6065-profile_image-70x70.png",
            createdDate: new Date(),
            snaps: 2
        }
    ];
    getAllFaceSnap() : FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not Found!');
        } else{
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    };
}
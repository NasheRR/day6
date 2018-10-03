import { Injectable } from "@angular/core";
import {Subject} from 'rxjs/Subject'
import { ToastController, AlertController } from "ionic-angular";

@Injectable()
export class MessagesService {
  public langLoaded = new Subject<void>()

  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController) {

  }

  newToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    })
    .present()
  }

  newAlert(title: string, message: string) {
    this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Cancel', 'Accept']
    })
  }
}
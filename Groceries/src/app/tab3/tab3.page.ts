import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { GroceryService } from '../grocery.service';
import { InputDialogService } from '../input-dialog.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

// tslint:disable-next-line: max-line-length
constructor(public navCtrl: NavController, public toastCtrl: ToastController,
            public alertCtrl: AlertController, public dataService: GroceryService,
            public inputDialogService: InputDialogService, public socialSharing: SocialSharing) {

}

loadItems() {
  return this.dataService.getItems();
}

/*Add a Grocery Item*/
addItem() {
  console.log('Adding Item...');
  this.inputDialogService.presentAlert();
}

/*Edit Grocery Item*/
async editItem(n, index) {
  console.log('Edit Item: ', n, index);
  const toast = this.toastCtrl.create({
    message: 'Updating Item: ' + n.itemName,
    duration: 3000
  });
  (await toast).present();
  this.inputDialogService.presentAlert(n, index);
}

/*Share Grocery Item*/
async shareItem(n, index) {
  console.log('Share: ', n, index);
  const toast = this.toastCtrl.create({
    message: 'Sharing the following item:' + n.itemName + ' ...',
    duration: 3000
});
  (await toast).present();

  const message = 'Grocery Item - Name:' + n.itemName + '- Quantity:' + n.qty;
  const subject = 'Sharing via Grocery App';
  this.socialSharing.share().then(() => {
    console.log('Shared Successfully!');
  }).catch((error) => {
    console.error('Error during sharing', error);
  });
}

/*Remove Grocery Item*/
async removeItem(n, index) {
  console.log('Remove Item: ', n, index);
  const toast = this.toastCtrl.create({
    message: 'Deleting Item - ' + n.itemName + ' ...',
    duration: 3000
});
  (await toast).present();
  this.dataService.removeItem(index);
}
}

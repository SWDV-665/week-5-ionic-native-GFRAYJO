import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceryService } from './grocery.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  async presentAlert(n ?, index ?) {
    const alert = await this.alertCtrl.create({
      header: n ? 'Edit item on the list' : 'Add item to the list',
      message: n ? 'Edit item and/or quantity' : 'Specify item and quantity',
      inputs: [
        {
          name: 'itemName',
          placeholder: 'Item Name',
          value: n ? n.itemName : null
        },
        {
          name: 'qty',
          placeholder: 'Quantity',
          value: n ? n.qty : null
        },
      ],
      buttons: [
        {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: item => {
          console.log('Saved clicked', item);
          if (index !== undefined) {
            this.dataService.editItem(item, index);
          } else {
            this.dataService.addItem(item)
          }
        }
      }]
    });
    alert.present();
   }

   constructor(public alertCtrl: AlertController, public dataService: GroceryService) { }
}



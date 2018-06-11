declare var require: any
var SHA256 = require("crypto-js/sha256");
import { Component } from '@angular/core';

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})
export class HashComponent{

  
   hashOut = "xxxxxxxxxxx";
  onSubmit(data: any){
   let hash: string = (SHA256(data.string).toString());
   console.log(hash);   
   let nonce = 0;
   console.log(hash.toString().slice(0, 3));
   while(hash.toString().slice(0, 3) != '000'){
     hash = SHA256(data.string + nonce).toString();
     nonce++;
   }
   console.log(nonce);
   console.log(hash);
   this.hashOut = hash;
 }

}

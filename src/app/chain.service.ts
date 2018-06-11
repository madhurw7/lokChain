import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ChainService {

  constructor(private db: AngularFireDatabase) { }

  getTrans(){
    return this.db.object('/unpTrans/');
  }

  addNewTrans(candidate){
    return this.db.object('/unpTrans/' + candidate.$key);
  }

  getUncountedVotes(candidate){
    //Work on this.
    let number;
    this.db.object('/unpTrans/' + candidate.$key +'/votes')
      .subscribe(response => {
       return (response.$value);
      });
      
}
}

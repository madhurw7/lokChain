
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class PollService {

  constructor(private http: Http, private db: AngularFireDatabase) {
      
   }

  getCandidates(){
    //Get Candidates from Firebase and Return an observable
    return this.db.list('/candidates');
  }

  vote(candidate) {
    //Update the no. of votes corresponding to the candidate id
    return this.db.object('/candidates/' + candidate.$key)
  }

  resetVotes(){
    this.db.list('/candidates').subscribe(response => {
      console.log(response);
      for (var i = 0; i < response.length; i++){
        this.db.object('/candidates/' + response[i].$key).update({
          votes: 0
        })
      }
    })
  }
}

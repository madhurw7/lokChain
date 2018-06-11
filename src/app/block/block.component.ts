import { ChainService } from './../chain.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  constructor(private chainService : ChainService) { }
  blockData;
  ngOnInit() {
  }
  
  mineBlock(){
    
    this.chainService.getTrans()
      .subscribe(response => {
        this.blockData = response;
        console.log(this.blockData);
        // console.log(response);
      });
    
  }


}

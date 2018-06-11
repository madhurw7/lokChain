import { ChainService } from './../chain.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  constructor(private chainService : ChainService) { }

  ngOnInit() {
  }
  
  mineBlock(){
    var blockData;
    this.chainService.getTrans()
      .subscribe(response => {
        blockData = response;
        console.log(response);
      });
    console.log(blockData);
  }


}

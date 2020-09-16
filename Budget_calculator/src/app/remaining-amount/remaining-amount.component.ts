import { Component, OnInit } from '@angular/core';
import { SharedService } from '../sharedService';



@Component({
  selector: 'app-remaining-amount',
  templateUrl: './remaining-amount.component.html',
  styleUrls: ['./remaining-amount.component.css']
})
export class RemainingAmountComponent implements OnInit {

  constructor(private shareService:SharedService) { }
  balance : number = 0;


  ngOnInit(){
    this.shareService.getBalance().subscribe(blnc => {
      this.balance = blnc;
    })

  }

  



}

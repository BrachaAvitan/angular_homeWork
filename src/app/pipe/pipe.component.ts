import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  d = new Date();
  title = "HELLO";
  l= "PipE";
  arrCurrency = [
    12,13,50,69,80
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

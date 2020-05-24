import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpipe',
  templateUrl: './testpipe.component.html',
  styleUrls: ['./testpipe.component.css']
})
export class TestpipeComponent implements OnInit {
  public firstPipeTest = "this is my sentence";
  public mydate = new Date();
  public mynumber = 417.789526;

  constructor() { }

  ngOnInit(): void {
  }

}

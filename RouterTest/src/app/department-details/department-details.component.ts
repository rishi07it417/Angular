import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private rout : ActivatedRoute, private router : Router ) { }
  public depId : string;
  public enableNext = false;
  public enablePrevious = false;
  ngOnInit(): void {
   // let id = this.rout.snapshot.paramMap.get('id');
   this.rout.paramMap.subscribe((parammap : ParamMap) => {
    let id = parammap.get('id');
     this.depId = id;

     let numId = parseInt(this.depId);
     if(numId >= 1 && numId<2){
      this.enableNext = false;
      this.enablePrevious = true;
     }
     if(numId ==4 && numId < 5){
      this.enableNext = true;
      this.enablePrevious = false;
     }

   })
  }

  onPrevious():void{
    let id = parseInt(this.depId);
    id = id-1;
    let strId = id+"";

    if(id>=1){
      this.enablePrevious = false;
      this.enableNext = false;

      this.router.navigate(['departmentdetails',strId]);
    }else{
      this.enablePrevious = true;
      this.enableNext = false;

    }
  }

  onNext():void{
    let id = Number(this.depId);
    id = id+1;
    let strId = id+"";

    if(id<5){

      this.enablePrevious = false;
      this.router.navigate(['departmentdetails',strId]);
    }else{
      this.enableNext = true;
      this.enablePrevious = false;

    }
  }

  goBack():void{
    //this.router.navigate(['department',{id:this.depId}])
    this.router.navigate(['../',{id:this.depId}],{relativeTo: this.rout});
  }

}

import { Component, OnInit } from '@angular/core';
import { Router,ParamMap,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-test',
  templateUrl: './department-test.component.html',
  styleUrls: ['./department-test.component.css']
})
export class DepartmentTestComponent implements OnInit {
  public selectedId="";
  public selectedColor = 'blue';
  public departments = [{"id": "1", "name" : "IT" },
  {"id": "2", "name" : "CP" },
  {"id": "3", "name" : "EC" },
  {"id": "4", "name" : "FT" }]

  constructor(private router : Router, private rout : ActivatedRoute) { }

  public onSelect(dep): void{
    console.log(dep.id);
    this.router.navigate(['department',dep.id]);
  }

  ngOnInit(): void {
    this.rout.paramMap.subscribe((parammap : ParamMap) => {
      let id = parammap.get('id');
      this.selectedId = id;
    });
  }

  onSelected(dep):string{
    if(this.selectedId == dep.id){
    return this.selectedColor ='red';
    }else{
      return;
    }
  }

}

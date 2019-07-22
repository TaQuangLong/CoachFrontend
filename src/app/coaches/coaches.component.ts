import { Component, OnInit } from '@angular/core';
import { Coach } from '../models/coach';
import { CoachService } from '../_service/coach.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements OnInit {
  coaches: Coach[];
  constructor(private coachService: CoachService) { }

  ngOnInit() {
    this.getCoaches();
  }

  getCoaches():void{
    this.coachService.getCoaches()
    .subscribe(coaches => this.coaches = coaches);
  }

  add(Name:string,Email:string,Address:string):void{
    Name = Name.trim();
    if(!name){return;}
    this.coachService.addCoach({Name,Email,Address} as Coach)
      .subscribe(coach=>{
        this.coaches.push(coach);
      });
  }

  delete(coach: Coach):void{
    debugger
    console.log('delete coach');
    this.coaches = this.coaches.filter(c=>c!==coach);
    this.coachService.deleteCoach(coach).subscribe();
  }
}

import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class miniDashboardComponent implements OnInit {
  @ViewChild("miniDashboard", { static: true }) public miniDashboard: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NotificationItem } from '../../../classes/notification-item'



@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  icon_style='play_arrow'
  counter:number=0;
  playFlag:boolean=false
  currentid
  nextid
  margin
  marginValue=0
  
  @ViewChild('notificationsContainer', { static: false }) notificationsContainer: ElementRef;
id:any
  notificatiosCoun: number;
   notifications: NotificationItem[];

  toogleAccordionbln: boolean

  constructor() {

    //Subscribtions
  }

  ngAfterViewInit() {
    this.notificationsContainer.nativeElement.style.display = 'none'
  }

  ngOnInit() {
  }

  toogleAccordion() {
    this.toogleAccordionbln = !this.toogleAccordionbln
    if (!this.toogleAccordionbln) {
      this.notificationsContainer.nativeElement.style.display = 'none';
    } else {
      this.notificationsContainer.nativeElement.style.display = 'block';
    }
  }

  gotoLocation(x) {
  }
  
  updateNotifications(notifications: NotificationItem[]) {
    if (!(notifications && notifications.length))
      return;

    this.notificatiosCoun = notifications.length;
    this.notifications = notifications;
  }
  playAndPause(){
    if (!(this.notifications && this.notifications.length))
    return;
    
    
    this.playFlag=!this.playFlag;
    if(this.playFlag){
      this.icon_style='pause' 
     this.id= setInterval(()=>{ 
    this.gotoLocation(this.notifications[this.counter])
    console.log(this.notifications[this.counter] );
    this.currentid=this.notifications[this.counter].deviceID;
   
      this.margin=this.marginValue+'px'
      if(this.counter>1){
        this.marginValue=this.marginValue-73
      }
      
        this.counter++;
        if(this.counter==this.notifications.length-1)
        {this.counter=0}
      }, );
    }else{
      this.margin='0px'
      this.icon_style='play_arrow'
      clearInterval(this.id)
      this.currentid=0;
    }
    
  }
  stopNavigate(){
    this.margin='0px'
      this.counter=0;
   
    
  }
}

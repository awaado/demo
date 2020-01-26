import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavItem } from './nav-item';

/** @title Sidenav with configurable mode */
@Component({
  selector: 'app-side-menu',
  templateUrl: 'side-menu.component.html',
  styleUrls: ['side-menu.component.css'],
})

export class SideMenuComponent {

  ////////////////
  navItems: NavItem[] = [
    {
      displayName: 'Demo',
      iconName: 'recent_actors',
      route: 'devfestfl',
      children: [
        {
          displayName: 'Demo parent',
          iconName: 'group',
          route: 'devfestfl/speakers',
          children: [
            {
              displayName: 'Demo 1',
              iconName: 'directions_car',
              route: 'mainview',
             
            },
            {
              displayName: 'Demo 2',
              iconName: 'delete',
              route: 'mainview',
              
            },
            {
              displayName: 'Demo 3',
              iconName: 'offline_bolt',
              route: 'mainview',
           
            },
            {
              displayName: 'Demo 4',
              iconName: 'highlight',
              route: 'mainview',
           
            }
          ]
        
        },
        {
          displayName: 'Adminstration',
          iconName: 'feedback',
          route: 'devfestfl/feedback'
        }
      ]
    },

  ];

  @ViewChild("wasteManagement", { static: true }) public WasteManagement: ElementRef;
  @ViewChild("elctricConsumption", { static: true }) public ElctricConsumption: ElementRef;
  @ViewChild("smartParking", { static: true }) public smartParking: ElementRef;
  @ViewChild("imageToggle", { static: false }) public imgToggle: ElementRef;
  @ViewChild("cont", { static: false }) public Container1: ElementRef;
  @ViewChild("btnMiniDashBoard", { static: false }) public btnMiniDashBoard: ElementRef;
  @ViewChild("miniDashboard", { static: true }) public miniDashboard: ElementRef;

  toogle_miniDashboard = true;
  toggle: boolean = true;
  showWeatherWidget: boolean;
  currentDB: string;

  mode = new FormControl('over');
  constructor() {
    this.showWeatherWidget = false;
  }
  ngAfterViewInit() {
    this.miniDashboard.nativeElement.style.display = 'none'
    this.WasteManagement.nativeElement.style.display = 'none'
    // this.miniDashboard.nativeElement.style.width = '96.5vw'
    this.imgToggle.nativeElement.style.left = '27vw';

    this.imgToggle.nativeElement.style.left = '27vw';
    this.Container1["_element"].nativeElement.childNodes[1].style.visibility = 'hidden'

    this.currentDB ='SM';
  }

  toggleSideMenu() {
    this.toggle = !this.toggle
    if (!this.toggle) {
      this.imgToggle.nativeElement.style.left = '20vw';
      this.imgToggle.nativeElement.src = '../../assets/arrow-left.svg'

      // this.miniDashboard.nativeElement.style.width = '75.3vw'
      this.miniDashboard.nativeElement.style.width = '96.5vw'

    } else {

      setTimeout(() => {
        this.imgToggle.nativeElement.style.left = '27vw';
        this.imgToggle.nativeElement.src = '../../assets/arrow-right.svg'
        this.miniDashboard.nativeElement.style.width = '96.5vw'

      }, 145);
    }
  }

  toogleMiniDashboard() {
    this.toogle_miniDashboard = !this.toogle_miniDashboard

    if (this.toogle_miniDashboard) {
      this.miniDashboard.nativeElement.style.display = 'none'
      this.btnMiniDashBoard.nativeElement.style.bottom = '0vh'
      this.btnMiniDashBoard.nativeElement.src = '../../assets/arrow-up.svg'
    }
    else {
      this.miniDashboard.nativeElement.style.display = 'block'
      this.btnMiniDashBoard.nativeElement.style.bottom = '230px';
      this.btnMiniDashBoard.nativeElement.src = '../../assets/arrow-down.svg'
    }

  }

  toggltWeatherComponent() {
    this.showWeatherWidget = !this.showWeatherWidget;
  }
}


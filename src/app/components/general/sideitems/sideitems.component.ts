import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {NavItem} from '../side-menu/nav-item';
import {Router} from '@angular/router';
import {NavService} from '../../../nav.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SideMenuComponent} from '../side-menu/side-menu.component'

@Component({
  selector: 'app-sideitems',
  templateUrl: './sideitems.component.html',
  styleUrls: ['./sideitems.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class SideitemsComponent implements OnInit {
  expanded: boolean=true
  
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;

  constructor(public navService: NavService,public sideMenuComponent:SideMenuComponent,
              public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected(item: NavItem) {
    this.callMiniDasboard(item)
    if (!item.children || !item.children.length) {
      // this.router.navigate([item.route]);
      this.navService.closeNav();
      
      
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
  callMiniDasboard(item){
    if(item.displayName=='Smart Parking'){
      this.sideMenuComponent.currentDB='SP'
      console.log('sp');
      
    }
    else if(item.displayName=='Waste Management'){
      this.sideMenuComponent.currentDB='WM'
      console.log('wm');

      
    }
    else if(item.displayName=='Smart Metering'){
      this.sideMenuComponent.currentDB='SM'
      console.log('sm');
      

      
    }
    else if(item.displayName=='Street Lighting'){
      this.sideMenuComponent.currentDB='SL'
      console.log('sl');

      
    }
  }
}

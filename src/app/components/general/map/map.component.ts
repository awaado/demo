import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from "@angular/core";
import { loadModules } from "esri-loader";
import { setDefaultOptions } from 'esri-loader';
import { environment } from 'src/environments/environment';
import { NotificationItem } from '../../../classes/notification-item'
import { mat3, vec2, vec3 } from 'gl-matrix'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent   {
 
      
}
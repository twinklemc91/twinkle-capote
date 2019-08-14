import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {} from 'googlemaps';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    @ViewChild('map', {static:true}) mapElement: any;
    map: google.maps.Map;

    public currentYear;

    ngOnInit() {
        // Initialize Google Map
        const mapProperties = {
            center: new google.maps.LatLng(1.4010541, 103.9153112),
            zoom:12, scrollwheel: false, draggable: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
       };
       this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

       // initialize variables
       this.currentYear = new Date().getFullYear();
    }
}
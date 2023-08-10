import {Component, OnInit} from '@angular/core';
import {userDetails, displayedColumns, menuTab} from './roles.constants';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  // Constants
  displayedColumns = displayedColumns;
  userDetails = userDetails;
  menuTab = menuTab;

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
  ) {
    this.matIconRegistry.addSvgIcon(
      'employee',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/submenu1.svg',
      ),
    );
    this.matIconRegistry.addSvgIcon(
      'trip',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/submenu2.svg',
      ),
    );
    this.matIconRegistry.addSvgIcon(
      'department',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/submenu3.svg',
      ),
    );
    this.matIconRegistry.addSvgIcon(
      'roles',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/submenu4.svg',
      ),
    );
    this.matIconRegistry.addSvgIcon(
      'grade',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/submenu5.svg',
      ),
    );
    this.matIconRegistry.addSvgIcon(
      'report',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/submenu6.svg',
      ),
    );
    this.matIconRegistry.addSvgIcon(
      'up_arrow',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/icons/up_arrow.svg',
      ),
    );
  }

  ngOnInit(): void {}
}

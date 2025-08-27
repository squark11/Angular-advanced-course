import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FaConfig, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fontAwesomeIcons } from './shared/font-awesome-icons';

import {FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@Component({
  imports: [RouterModule,FontAwesomeModule,NavbarComponent, FooterComponent ],
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent implements OnInit {
  
  private faIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);

  ngOnInit() {
    this.initFontAwesome();
  }
  initFontAwesome() {
    this.faConfig.defaultPrefix = 'far'; 
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}

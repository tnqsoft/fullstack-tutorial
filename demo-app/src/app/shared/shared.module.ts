import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {
  faFolder
} from '@fortawesome/free-solid-svg-icons';
import {CommonModule} from '@angular/common';
import { DemoPipe } from '@app/shared/pipes/demo.pipe';

@NgModule({
  declarations: [
    DemoPipe
  ],
  imports: [
    FontAwesomeModule,
  ],
  exports: [
    FontAwesomeModule,
    DemoPipe,
  ]
})
export class SharedModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faFolder);
  }

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule
    };
  }
}

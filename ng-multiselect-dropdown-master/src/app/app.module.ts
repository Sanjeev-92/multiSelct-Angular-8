import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TabsModule, ButtonsModule } from 'ngx-bootstrap';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { SelectSectionComponent } from './components/select-section';
import { SampleSectionComponent } from './components/sample-section.component';
import { SingleDemoComponent } from './components/select/single-demo';
import { MultipleDemoComponent } from './components/select/multiple-demo';
import { ShCodeViewer } from '../code-viewer/code-viewer.module';

import { AppComponent } from './app.component';
import { NgMultiSelectDropDownModule } from '../ng-multiselect-dropdown/search-select';

@NgModule({
  declarations: [SelectSectionComponent, SampleSectionComponent, SingleDemoComponent, MultipleDemoComponent, AppComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    ShCodeViewer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

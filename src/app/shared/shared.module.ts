import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideBoardComponent} from "@shared/components/side-board/side-board.component";
@NgModule({
  declarations: [SideBoardComponent],
  exports: [
    SideBoardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}

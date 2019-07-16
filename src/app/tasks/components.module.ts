import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { TaskItemComponent } from './components/task-item/task-item.component';


@NgModule({
  declarations: [TaskItemComponent],
  imports: [SharedModule],
  exports: [TaskItemComponent]
})
export class ComponentsModule { }


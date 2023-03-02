import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo2/demo3/demo3.component';
import { Demo4Component } from './demo2/demo4/demo4.component';

const routes: Routes = [
  {
    path: 'demo2',
    component: Demo2Component,
    children: [
      {
        path: 'demo3',
        component: Demo3Component,
      },
      {
        path: "demo4",
        component: Demo4Component
      }
    ],
  },
  {
    path: 'demo1',
    component: Demo1Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

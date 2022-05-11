import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-student' },
  { path: 'create-student', component: StudentCreateComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'student-edit/:id', component: StudentEditComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
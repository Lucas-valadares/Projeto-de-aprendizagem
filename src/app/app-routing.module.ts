import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { EditTextComponent } from './components/edit-text/edit-text.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { AuthGuard } from './guards/auth.guard.service';

const routes: Routes = [{
  path:"",
  component: HomeComponent,
},
{
  path: "calculator",
  component: CalculatorComponent,
  canActivate: [AuthGuard]
},
{
  path:"editText",
  component: EditTextComponent,
  canActivate: [AuthGuard]
},
{
  path:"ticTacToe",
  component: TicTacToeComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

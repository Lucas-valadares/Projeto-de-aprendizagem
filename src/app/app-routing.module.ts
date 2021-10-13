import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { EditTextComponent } from './components/edit-text/edit-text.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},
{
  path: "calculator",
  component: CalculatorComponent
},
{
  path:"editText",
  component: EditTextComponent
},
{
  path:"ticTacToe",
  component: TicTacToeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

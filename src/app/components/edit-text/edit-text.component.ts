import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-text',
  templateUrl: './edit-text.component.html',
  styleUrls: ['./edit-text.component.css']
})
export class EditTextComponent  implements OnInit {

title = 'app';
form: FormGroup | any;
htmlContent1 = "";

editorConfig: AngularEditorConfig = {
  editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '68vh',
    maxHeight: '68vh',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Escreva Aqui...',
    defaultParagraphSeparator: '',
    defaultFontName: 'font',
    defaultFontSize: '5',
    outline: true,
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'},
      {class: 'cursive', name: 'Cursive'},
      {class: 'fantasy',name: 'Fantasy'},
    ],
    customClasses: [
      { name: 'quote', class: 'quote' },
      { name: 'redText', class: 'redText' },
      { name: 'titleText', class: 'titleText', tag: 'h1'},
    ],
    toolbarHiddenButtons: [
      [
      'customClasses',
      'insertVideo',
      'removeFormat',
      'toggleEditorMode'
      ]
    ]
};

// futuramente quem sabe baixar em PDF o texto editado 
// downloadPdf() {
// console.log(this.htmlContent1)
// }
constructor(private formBuilder: FormBuilder) {}

ngOnInit() {
  this.form = this.formBuilder.group({
    signature: ['', Validators.required]
  });
  console.log(this.htmlContent1);
}

}

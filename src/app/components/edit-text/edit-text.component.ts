import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-edit-text',
  templateUrl: './edit-text.component.html',
  styleUrls: ['./edit-text.component.css']
})
export class EditTextComponent {

  editorConfig: AngularEditorConfig  ={
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
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'},
      {class: 'cursive', name: 'Cursive'},
      {class: 'fantasy',name: 'Fantasy'},
    ],

    uploadUrl: 'v1/image',

    toolbarHiddenButtons: [
  [
    'customClasses',
    'insertImage', //colocar imagem
    'insertVideo',
    'insertHorizontalRule',
    'toggleEditorMode'
  ]
]
};

}

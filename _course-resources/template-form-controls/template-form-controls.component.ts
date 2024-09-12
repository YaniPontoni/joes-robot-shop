import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bot-template-form-controls',
  templateUrl: './template-form-controls.component.html',
  styleUrls: ['./template-form-controls.component.css'],
})
export class TemplateFormControlsComponent implements OnInit {
  textInput: string = '';
<<<<<<< HEAD
  numericInput: number = 0;
=======
  numericInput: string = '';
>>>>>>> main
  stringInput: string = '';
  numericSelect: number = 0;
  checkboxInput: boolean = false;
  radioInput: number | null = null;

  selectOptions: any[] = [
    { text: 'Option One', value: 1 },
    { text: 'Option Two', value: 2 },
  ];
<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void { }
=======
  constructor() {}

  ngOnInit(): void {}
>>>>>>> main

  getType(value: any) {
    if (value === null || value === undefined) return '';

    console.log('ns', this.numericSelect);
    return typeof value;
  }
}

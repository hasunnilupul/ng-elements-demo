import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-vowel-picker',
  templateUrl: './vowel-picker.component.html',
  styleUrls: ['./vowel-picker.component.css']
})
export class VowelPickerComponent implements OnInit {
  letters = VOWELS;

  @Input() letterColor: string = '';
  @Output() letterSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    if (this.letterColor) {
      console.log(`custom letter color detected: ${this.letterColor}`);
    }
  }

  selected(letter: string) {
    console.log(`letter selected: ${letter}`);
    this.letterSelected.emit(letter);
  }
}

const VOWELS = ["A", "E", "I", "O", "U"];

import { Component, OnInit } from '@angular/core';
import { SelectItemGroup } from 'primeng/api/selectitemgroup';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']

})
export class Practice3Component implements OnInit{

  groupedCities: SelectItemGroup[];

  selectedCity: string | undefined;
  ingredient!: string;
  userForm: any;
  constructor() {
      this.groupedCities = [
          {
              label: 'Germany',
              value: 'de',
              items: [
                  { label: 'Berlin', value: 'Berlin' },
                  { label: 'Frankfurt', value: 'Frankfurt' },
                  { label: 'Hamburg', value: 'Hamburg' },
                  { label: 'Munich', value: 'Munich' }
              ]
          },
          {
              label: 'USA',
              value: 'us',
              items: [
                  { label: 'Chicago', value: 'Chicago' },
                  { label: 'Los Angeles', value: 'Los Angeles' },
                  { label: 'New York', value: 'New York' },
                  { label: 'San Francisco', value: 'San Francisco' }
              ]
          },
          {
              label: 'Japan',
              value: 'jp',
              items: [
                  { label: 'Kyoto', value: 'Kyoto' },
                  { label: 'Osaka', value: 'Osaka' },
                  { label: 'Tokyo', value: 'Tokyo' },
                  { label: 'Yokohama', value: 'Yokohama' }
              ]
          }
      ];


    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    reset(){
      this.userForm.reset({
        ////保留下方有賦值的值
        account:'boy',
  });
}

}
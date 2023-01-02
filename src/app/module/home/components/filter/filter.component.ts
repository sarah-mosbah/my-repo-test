import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map, Observable, skip } from 'rxjs';
import { FilterOptions } from '../../../shared/models/filterOptions.interface';
import { SelectInput } from '../../../shared/models/selectInput.interface';
import { DoctorsProvider } from '../../state/providers/doctors.provider';
@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() emitFilterOptions = new EventEmitter<FilterOptions>();
  highValue: number = 900;
  lowValue: number = 100;
  genders: any[];
  specilities$: Observable<any>;
  areas$: Observable<any>;
  filterOptions!: FilterOptions;
  constructor(private doctorProvider: DoctorsProvider) {
    this.genders = [{
      name: "Male",
      value: 1
    }, {
      name: "Female",
      value: 2
    }]
    this.doctorProvider.dispatchGetDoctorsSpecilaities();
    this.specilities$ =this.doctorProvider.selectDoctorsSpecilaities$().pipe(skip(1), map((specilities) => {
      return (specilities as SelectInput[]).map((speciality) => ({name: speciality.name, value: speciality.id}));
    }));
    this.doctorProvider.dispatchGetDoctorsClinicsArea();
    this.areas$ =this.doctorProvider.selectDoctorsClinicsArea$().pipe(skip(1), map((areas) => {
      return (areas as SelectInput[]).map((area) => ({name: area.name, value: area.id}));
    }));
  }
  ngOnInit(): void {}

  onSlideChange($event: {lowValue: number, highValue: number}) {
    this.highValue = Math.max($event.highValue, $event.lowValue);
    this.lowValue = Math.min($event.highValue, $event.lowValue);
    this.filterOptions = {...this.filterOptions,  visitCostFrom: this.lowValue, visitCostTo: this.highValue}
    this.emitFilterOptions.emit(this.filterOptions);
  }

  onCheckBoxChange(value: any[], id: string) {
    switch (id) {
      case 'speciality':
        this.filterOptions = {...this.filterOptions,  specialities: value.join(',')}
        this.emitFilterOptions.emit(this.filterOptions);
        break;
      case 'area':
        this.filterOptions = {...this.filterOptions, areas: value.join(',')}
        this.emitFilterOptions.emit(this.filterOptions);
        break;
      case 'gender': 
        if(value.length === 2)
          this.filterOptions = {...this.filterOptions, gender: ''};
        else 
          this.filterOptions = {...this.filterOptions, gender: value[0] === 1? 'male': 'female'};
        this.emitFilterOptions.emit(this.filterOptions);
        break;
      default:
        break;
    }
  }
}

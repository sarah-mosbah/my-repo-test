import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainPage } from 'projects/check-me-web/src/app/main.page';
import { Observable, skip, takeUntil } from 'rxjs';
import { Sort } from '../../../shared/models/enum/sort.enum';
import { FilterOptions } from '../../../shared/models/filterOptions.interface';
import { Doctor } from '../../../shared/models/user.interface';
import { DoctorsProvider } from '../../state/providers/doctors.provider';
import { FilterProvider } from '../../state/providers/filter.provider';

@Component({
  selector: 'doctor-filteration-page',
  templateUrl: './doctor-filteration.page.html',
  styleUrls: ['./doctor-filteration.page.scss']
})
export class DoctorFilterationPage extends MainPage implements OnInit {
  @ViewChild("doctorsList") doctorsList!: ElementRef;
  doctors: Doctor[];
  totalCount!: number;
  pageNumber = 1;
  size= 4;
  filterOptions: FilterOptions;
  constructor(private doctorsProvider: DoctorsProvider, private filterProvider: FilterProvider) { 
    super();
    this.doctors = [];
    const skip= this.pageNumber * this.size - this.size;
    this.filterOptions = {
      skip,
      limit: this.size,
    }
    this.filterProvider.getCurrentSearchKey$().pipe(takeUntil(this.destroyed$)).subscribe((value) => {
      this.filterOptions = {
        ...this.filterOptions,
        name: value
      };
      this.doctorsProvider.dispatchGetAllDoctors(this.filterOptions);
    });
  }

  ngOnInit(): void {
    this.doctorsProvider.dispatchGetAllDoctors(this.filterOptions);
    this.doctorsProvider.selectDoctors$()
    .pipe(skip(1), takeUntil(this.destroyed$))
    .subscribe((response) => {
      this.doctors = response!.doctors;
      this.totalCount = response!.count;
    });
  }

  onFilterOptionsChanged(filterOptions: any) {
    this.filterOptions = {...this.filterOptions, ...filterOptions};
    this.doctorsProvider.dispatchGetAllDoctors(this.filterOptions);
  }

  onPaginate() {
    const skip= this.pageNumber * this.size - this.size;
    this.filterOptions = {...this.filterOptions, skip };
    this.doctorsProvider.dispatchGetAllDoctors(this.filterOptions);
    
  }

  onSort(type: Sort) {
    if(type=== Sort.asc) {
     this.doctors = this.doctors.sort((doctorA, doctorB) => doctorA.cheapestClinic.visitCost 
     -doctorB.cheapestClinic.visitCost)
    } else {
      this.doctors = this.doctors.sort((doctorA, doctorB) => doctorB.cheapestClinic.visitCost 
      -doctorA.cheapestClinic.visitCost)
    }
  }

  get Sort(): typeof Sort {
    return Sort;
  }

}

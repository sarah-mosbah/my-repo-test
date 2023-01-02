import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromFilterActions from '../actions/filters.actions';
import * as fromReducer from '../reducers/home.reducer';
@Injectable({
    providedIn: 'root'
})
export class FilterProvider {
    constructor(private store: Store<fromReducer.ModuleState>) {
    }

    public setSearchQuery(searchKey: string) {
        this.store.dispatch(fromFilterActions.setSearchKey({payload: searchKey}));
      }
  
      public getCurrentSearchKey$(): Observable<string> {
        return this.store.pipe(select(fromReducer.selectSearchKey));
      }
}
  
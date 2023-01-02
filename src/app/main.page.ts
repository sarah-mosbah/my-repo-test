import { Component, OnDestroy } from "@angular/core";
import { ReplaySubject } from "rxjs";


@Component({
    selector: 'main-page',
    template: `<ng-content></ng-content>`
})
export class MainPage implements OnDestroy{
    protected destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
    ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.unsubscribe();
    }
}
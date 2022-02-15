import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export abstract class Unsubscribable implements OnDestroy {
    protected _destroy: Subject<undefined>;

    protected constructor() {
        this._destroy = new Subject<undefined>();
    }

    public ngOnDestroy(): void {
        this._destroy.next(undefined);
        this._destroy.complete();
    }
}

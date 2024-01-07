import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UpgradeService {
    private openNewPostSource = new Subject<boolean>();
    openNewPost$ = this.openNewPostSource.asObservable();

    showNewPostForm() {
        this.openNewPostSource.next(true);
    }
}

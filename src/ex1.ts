import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

const source$ = Observable.create((observer: Observer<number>) => {
    let i = 0;

    setInterval(() => {
        observer.next(i++);

        if (i >= 5) {
            observer.complete();
        }
    }, 500);
});

source$.subscribe(console.log);

export default source$;
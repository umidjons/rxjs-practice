import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

const promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(42) }, 5000);
});

promise.then((val) => {
    console.log(`In then ${val}`);
});

const subscription$ = Observable.fromPromise(promise).subscribe(val => {
    console.log(`In subscribe ${val}`);
});

subscription$.unsubscribe();

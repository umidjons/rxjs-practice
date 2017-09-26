import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

console.log('Started...');
Observable.timer(2000).subscribe(() => { console.log('Time passed.') });
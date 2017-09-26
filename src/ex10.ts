import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

const candidates = ['John', 'Jane', 'Mike', 'Bob'];

Observable.from(candidates)
    .take(3) // take first 3 elements
    .do(candidate => console.log(`Current: ${candidate}`)) // do some side-effect work
    .subscribe();
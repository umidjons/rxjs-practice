import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

Observable.from(['The quick brown box', 'jumps over the lazy dog'])
    .map(str => str.split(' '))
    .do(arr => console.log('Words count:', arr.length))
    .subscribe(console.log);

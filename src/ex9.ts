import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/scan';

const candidates = [
    { name: 'Ben', skills: ['c++', 'js', 'linux'] },
    { name: 'John', skills: ['c', 'angular', 'linux'] },
    { name: 'Jane', skills: ['js', 'react', 'windows'] },
];

Observable.from(candidates)
    .filter(candidate => candidate.skills.includes('linux'))
    .scan((selectedCandidates: string[], candidate) => {
        selectedCandidates.push(candidate.name);
        return selectedCandidates;
    }, []) // scan will reveal intermediate values too
    .subscribe(console.log); // Output: [ 'Ben' ], [ 'Ben', 'John' ]
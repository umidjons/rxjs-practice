import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/reduce';

const candidates = [
    { name: 'Ben', skills: ['c++', 'js', 'linux'] },
    { name: 'John', skills: ['c', 'angular', 'linux'] },
    { name: 'Jane', skills: ['js', 'react', 'windows'] },
];

Observable.from(candidates)
    .filter(candidate => candidate.skills.includes('linux'))
    .reduce((selectedCandidates: string[], candidate) => {
        selectedCandidates.push(candidate.name);
        return selectedCandidates;
    }, [])
    .subscribe(console.log); // Output: [ 'Ben', 'John' ]
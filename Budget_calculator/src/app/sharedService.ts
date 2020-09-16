import { BehaviorSubject, Observable } from '../../node_modules/rxjs';

export class SharedService {
    constructor(){}

    private valueObs: BehaviorSubject<number> = new BehaviorSubject<number>(null);

    public setBalance(value: number): void {
        this.valueObs.next(value);
    }
    
    public getBalance(): Observable < number > {
        return this.valueObs;
    }


    }
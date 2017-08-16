import { Injectable } from '@angular/core';
import { Bill } from '../Bill'


@Injectable()
export class MajdServiceService {

  constructor() { }
getBills() {
    const bills: Bill[] = [];
/*
    bills.push(
      new Bill('sugar', 2,200));
      */
    return bills;
  }

}

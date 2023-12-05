import { Injectable } from '@angular/core';

export interface NameRecord {
  name: string,
  count?: number
}
@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }
  listOfNames = [{ name: 'Trupthi' }, { name: 'Trupthi' }, { name: 'Trupthi' }, { name: 'Trupthi' }, { name: 'Trupthi' }, { name: 'Trupthi' }, { name: 'Trupthi' }, { name: 'Trupthi' }, { name: 'Trupthi' }, { name: 'Trupthi' }, { name: 'Trupthi' },
  { name: 'Rahul' }, { name: 'Rahul' }, { name: 'Rahul' }, { name: 'Rahul' }, { name: 'Rahul' }, { name: 'Rahul' }, { name: 'Rahul' }, { name: 'Rahul' }, { name: 'Rahul' }, { name: 'Rahul' },
  { name: 'Alex' }, { name: 'Alex' }, { name: 'Alex' }, { name: 'Alex' }, { name: 'Alex' }, { name: 'Alex' }, { name: 'Alex' }, { name: 'Alex' }, { name: 'Alex' }, { name: 'Tarak' }, { name: 'Tarak' }, { name: 'Tarak' }, { name: 'Tarak' }, { name: 'Tarak' }, { name: 'Tarak' }, { name: 'Tarak' }, { name: 'Tarak' }, { name: 'Ram' }, { name: 'Ram' }, { name: 'Ram' }, { name: 'Ram' }, { name: 'Ram' }, { name: 'Ram' }, { name: 'Bheem' }, { name: 'Bheem' }, { name: 'Bheem' }, { name: 'Bheem' }, { name: 'Bheem' }, { name: 'Bheem' }, { name: 'Bheem' }, { name: 'Jay' }, { name: 'Jay' }, { name: 'Jay' }, { name: 'Jay' }, { name: 'Jay' }, { name: 'Jay' }, { name: 'Jack' }, { name: 'Jack' }, { name: 'Jack' }, { name: 'Jack' }, { name: 'Max' }, { name: 'Max' }, { name: 'Max' }, { name: 'Nishanth' }, { name: 'Nishanth' }, { name: 'Sameendra' }
    // {name:'Ram'},{name:'Ram'},{name:'Ram'},{name:'Ram'},{name:'Ram'},{name:'Ram'},{name:'Ram'},
  ]
}

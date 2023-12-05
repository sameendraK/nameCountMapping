import { Component, OnInit } from '@angular/core';
import { DataStoreService, NameRecord } from 'src/app/services/data-store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nameMappingTable';

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
    this.getValues();
    this.setResultsToShow();
  }
  //We are taking the results from service file, filtering unique names and then counting the number of appearances of a name in the given data set.(array of service file). Upon storing, we are adding those to a array and iterating using ngFor.

  namesSetWithoutDuplicates: Set<string> = new Set();
  currentRecords: NameRecord[] = [];
  keyValuePairs: { [id: string]: NameRecord } = {};
  resultsToShow: any[] = []

  //gets the results from service and stores them.
  getValues() {
    let originalNamesList = this.dataStoreService.listOfNames;
    originalNamesList.forEach((i: NameRecord) => {
      this.namesSetWithoutDuplicates.add(i.name);
    })
    this.currentRecords = originalNamesList;
    console.log(this.namesSetWithoutDuplicates, originalNamesList);
  }

  //
  setResultsToShow() {
    this.namesSetWithoutDuplicates.forEach((name: string) => {
      let count = this.currentRecords.filter((nameRecord: NameRecord) => {
        return nameRecord.name === name;
      }).length
      this.keyValuePairs[name] = { name: name, count: count };
      this.resultsToShow.push(this.keyValuePairs[name]);
    })
    // console.log(this.resultsToShow)
  }
}

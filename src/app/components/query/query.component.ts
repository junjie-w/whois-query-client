import { Component, OnInit} from '@angular/core';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  text: string;
  // data: string;
  data: [];
  showErrorMsg: boolean = false;
  invalidInputButton: boolean = false;

  constructor(private queryService: QueryService) {  }

  ngOnInit(): void {
  }
  onSubmit() {

    // validate if the user input is a valid domain name
    const domainValidate = (domain) => {
      if (/^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]\.(?:com|net)$/i.test(domain)) {
        return true;
    } else {
        return false;
      }
    }

    // if the user input is not a valid domain name we can show an alert
    // if(!this.text || !domainValidate(this.text)) {
    //   alert('Please enter a valid domain name');
    //   return;
    // }

    // if the user input is not a valid domain name, we can also show an error message, and make sure the user input won't be submitted 
      if(!this.text || !domainValidate(this.text)) {
        this.showErrorMsg = true
        this.invalidInputButton = true
        document.querySelector("#text").addEventListener('input', () => {        
        this.showErrorMsg = false
        this.invalidInputButton = false
      })     
        return;
    }  

    const domainName = this.text;

    this.queryService.getInfo(domainName).subscribe(data => this.data = JSON.parse(data).split("\n"));
  }
} 

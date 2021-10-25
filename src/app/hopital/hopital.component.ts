import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hopital',
  templateUrl: './hopital.component.html',
  styleUrls: ['./hopital.component.css']
})
export class HopitalComponent implements OnInit {
  hopital:any=[]

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3030/raed/sparql?query=PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fimene%2Fontologies%2F2021%2F9%2Funtitled-ontology-9%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0ASELECT+%3FHopital+%3Fnom%0AWHERE+%7B%0A++++++++%3Fhopital+rdf%3Atype+ns%3AHopital.%0A++++++++%3Fhopital+ns%3Anom+%3Fnom.%0A+++++++++%0A%7D%0A%0A&output=json').subscribe((data)=>{
      console.log(data.results.bindings)
      this.hopital=data.results.bindings
      console.log(this.hopital)
    })
  }


}

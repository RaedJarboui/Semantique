import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {

  personnel:any=[]

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3030/raed/sparql?query=PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fimene%2Fontologies%2F2021%2F9%2Funtitled-ontology-9%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0ASELECT+%3Fpersonnel+%3Fnom%0AWHERE+%7B%0A++++++++%3Fpersonnel+rdf%3Atype+ns%3APersonnel.%0A++++++++%3Fpersonnel+ns%3Anom+%3Fnom.%0A+++++++++%0A%7D%0A%0A&output=json').subscribe((data)=>{
      console.log(data.results.bindings)
      this.personnel=data.results.bindings
      console.log(this.personnel)
    })
  }
  public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(newVal);
    if(newVal == "m"){
      this.http.get('http://localhost:3030/raed/sparql?query=PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fimene%2Fontologies%2F2021%2F9%2Funtitled-ontology-9%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0ASELECT+%3FPatient+%3Fnom+%3Fage%0AWHERE+%7B%0A++++++++%3FPatient+rdf%3Atype+ns%3AMasculin.%0A++++++++%3FPatient+ns%3Anom+%3Fnom+.%0A++%09%09%3FPatient+ns%3Aage+%3Fage+.%0A+++++%0A%7D%0A%0A&output=json').subscribe((data)=>{
      console.log(data.results.bindings)
      this.personnel=data.results.bindings
      console.log(this.personnel)
    })

    }else if(newVal == "h"){
      this.http.get('http://localhost:3030/raed/sparql?query=PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fimene%2Fontologies%2F2021%2F9%2Funtitled-ontology-9%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0ASELECT+%3FagentHospitalier+%3Fnom%0AWHERE+%7B%0A++++++++%3FagentHospitalier+rdf%3Atype+ns%3AAgentHospitalier.%0A++++++++%3FagentHospitalier+ns%3Anom+%3Fnom.%0A+++++++++%0A%7D&output=json').subscribe((data)=>{
      console.log(data.results.bindings)
      this.personnel=data.results.bindings
      console.log(this.personnel)
    }) 
  }else if(newVal == "t"){
    this.http.get('http://localhost:3030/raed/sparql?query=PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fimene%2Fontologies%2F2021%2F9%2Funtitled-ontology-9%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0ASELECT+%3FagentTechnique+%3Fnom%0AWHERE+%7B%0A++++++++%3FagentTechnique+rdf%3Atype+ns%3AAgentTechnique.%0A++++++++%3FagentTechnique+ns%3Anom+%3Fnom.%0A+++++++++%0A%7D&output=json').subscribe((data)=>{
      console.log(data.results.bindings)
      this.personnel=data.results.bindings
      console.log(this.personnel)
    }) 
}
else if(newVal == "s"){
  this.http.get('http://localhost:3030/raed/sparql?query=PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fimene%2Fontologies%2F2021%2F9%2Funtitled-ontology-9%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0ASELECT+%3FaideSoignant+%3Fnom%0AWHERE+%7B%0A++++++++%3FaideSoignant+rdf%3Atype+ns%3AAideSoignant.%0A++++++++%3FAideSoignant+ns%3Anom+%3Fnom.%0A+++++++++%0A%7D&output=json').subscribe((data)=>{
    console.log(data.results.bindings)
    this.personnel=data.results.bindings
    console.log(this.personnel)
  }) 
}else if(newVal == "i"){
  this.http.get('http://localhost:3030/raed/sparql?query=PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fimene%2Fontologies%2F2021%2F9%2Funtitled-ontology-9%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0ASELECT+%3Finfirmier+%3Fnom%0AWHERE+%7B%0A++++++++%3Finfirmier+rdf%3Atype+ns%3AInfirmier.%0A++++++++%3Finfirmier+ns%3Anom+%3Fnom.%0A+++++++++%0A%7D&output=json').subscribe((data)=>{
    console.log(data.results.bindings)
    this.personnel=data.results.bindings
    console.log(this.personnel)
  }) 
}
}

}

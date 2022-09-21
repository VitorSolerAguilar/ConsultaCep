import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cep : string;
  logradouro : string;
  complemento : string;
  bairro : string;
  localidade : string;
  uf : string;
  Result : any;

  constructor(private http: HttpClient) {}

  BuscarCep(){
    let url = "http://viacep.com.br/ws/" + this.cep + "/json/";
    this.Result =  this.http.get(url).toPromise();

    this.Result.then((json) => {
      console.log(json);
      this.logradouro = json.logradouro;
      this.complemento = json.complemento;
      this.bairro = json.bairro;
      this.localidade = json.localidade;
      this.uf = json.uf;
    });
    }

}

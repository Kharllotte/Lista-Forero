import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
  public nombre : string | undefined;
  public personas= ["Liliana", "Daniela", "Carlos", "David", "Juan"];

  ngOnInit(): void {
    
  }
}

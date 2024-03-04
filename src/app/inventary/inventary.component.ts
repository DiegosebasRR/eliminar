import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-inventary',
  standalone: true,
  imports: [],
  templateUrl: './inventary.component.html',
  styleUrl: './inventary.component.css',
})
export class InventaryComponent implements OnInit {
  datos: any;

  constructor(private servicio: ApiService) {}

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(): void {
    this.servicio.getDatos().subscribe(
      (response) => {
        this.datos = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

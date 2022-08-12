import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.scss'],
})
export class ListaEstudianteComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'dni',
    'email',
    'celular',
    'action',
  ];
  dataSource : any[] = [
    {
      id: 1,
      name: 'Fernando Giocochea',
      dni: '12345678',
      email: 'fgoicochea@gmail.com',
      celular: '955454541',
    },
    {
      id: 1,
      name: 'Juan Diaz',
      dni: '12345678',
      email: 'jdiaz@gmail.com',
      celular: '955454541',
    },
    {
      id: 1,
      name: 'Manuel Luis',
      dni: '12345678',
      email: 'mluis@gmail.com',
      celular: '955454541',
    },
  ];

  constructor(private router: Router, public estudiante: EstudiantesService) {}

  ngOnInit(): void {
    this.getEstudiante();
  }

  goToCreate() {
    this.router.navigate(['/estudiante/crear']);
  }
  goToEdit(info: any) {
    console.log(info);
    this.router.navigate([`/estudiante/editar/${info.id}`]);
  }
  getEstudiante() {
    this.estudiante
      .getEstudiante()
      .subscribe((data: any) => (this.dataSource = data));
  }
}

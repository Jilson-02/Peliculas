import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Servicios/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  movies: any[] = []; // Asegúrate de que esto sea una lista vacía

  constructor(private usuarioService: UsuarioService, private router:Router) { }

  ngOnInit() {
    this.getMovies();
  }

  logout(){
    this.router.navigateByUrl('/home')
  }

  getMovies() {
    this.usuarioService.getMovies().subscribe({
      next: (datos: any) => {
        // Asegúrate de que 'data' es una lista de objetos
        this.movies = datos.data.map((item: any) => item.attributes);
      },
      error: (error: any) => {
        console.error('Error al cargar las películas', error);
      }
    });
  }

 


}

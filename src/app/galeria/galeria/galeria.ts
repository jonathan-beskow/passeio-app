import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class Galeria implements OnInit {

  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = [];


  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ) { }


  ngOnInit(): void {

    this.populaCategoria();
    this.populaLugares();
  }

  populaCategoria() {
    this.categoriaService.listarTodas().subscribe(
      {
        next: categorias => {
          this.categoriasFiltro = categorias,
            console.log("Categorias: ", this.categoriasFiltro)
        }
      }
    )
  }

  populaLugares() {
    this.lugarService.listarTodos().subscribe(
      {
        next: lugar => {
          this.lugares = lugar,
            console.log("Lugares: ", this.lugares)
        }
      }
    )
  }

}

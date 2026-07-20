import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { Lugar } from '../../lugares/lugar';
import { LugarService } from '../../lugares/lugar.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class GaleriaComponent implements OnInit {
  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = [];
  nomeFiltro: string = '';
  categoriaFiltro: string = '';

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService,
  ) {}

  ngOnInit(): void {
    this.categoriaService
      .listarTodas()
      .subscribe((categorias) => (this.categoriasFiltro = categorias));

    this.lugarService
      .listarTodos()
      .subscribe((lugaresResposta) => (this.lugares = lugaresResposta));
  }

  getTotalEstrelas(lugar: Lugar): string {
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 - (lugar.avaliacao || 0));
  }

  filtrar() {
    this.lugarService
      .filtrar(this.nomeFiltro, this.categoriaFiltro)
      .subscribe((resultado) => (this.lugares = resultado));
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { layoutProps } from './layoutProps';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit {
  props: layoutProps = {
    titulo: '',
    subTitulo: '',
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(() => this.activatedRoute.firstChild !== null),
        map(() => this.obterPropriedadesLayout()),
      )
      .subscribe((props: layoutProps) => (this.props = props));
  }

  obterPropriedadesLayout(): layoutProps {
    let rotaFilha = this.activatedRoute.firstChild;

    while (rotaFilha?.firstChild) {
      rotaFilha = rotaFilha.firstChild;
    }

    return rotaFilha?.snapshot.data as layoutProps;
  }
}

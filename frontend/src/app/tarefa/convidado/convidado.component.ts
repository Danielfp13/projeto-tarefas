import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Convidado } from '../convidado/Convidado';
import { FieldMessage } from '../../model-error/FieldMessage';
import { ConvidadoService } from '../../service/convidado.service';
import { TarefaComponent } from '../tarefa/tarefa.component';
import { TarefaService } from '../../service/tarefa.service';

@Component({
  selector: 'app-convidado',
  templateUrl: './convidado.component.html',
  styleUrls: ['./convidado.component.css']
})
export class ConvidadoComponent implements OnInit {

  convidado: Convidado
  success: boolean = false;
  errors: FieldMessage[];
  idTarefa: number

  constructor(private service: ConvidadoService, private router: Router, private tatefaService: TarefaService) {
    this.convidado = new Convidado();
  }

  ngOnInit(): void {
    this.idTarefa = this.tatefaService.idTarefa
  }

  onSubmit() {
    this.convidado.idTarefa = this.idTarefa
    this.service.salvar(this.convidado).subscribe(
      (response) => {
        this.success = true;
        this.errors = [];
        this.convidado = response;
        this.convidado.nome=''
      },
      (errorResponse) => {
        this.errors = errorResponse.error.erros;
        this.success = false;
      }
    );

  }

  voltarParaListagem() {
    this.router.navigate(['/tarefa/lista']);
  }
}

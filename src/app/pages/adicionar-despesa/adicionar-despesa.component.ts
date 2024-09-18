import { Component } from '@angular/core';
import { TransacaoComponent } from '../../components/transacao/transacao.component';

@Component({
  selector: 'app-adicionar-despesa',
  standalone: true,
  imports: [
    TransacaoComponent
  ],
  templateUrl: './adicionar-despesa.component.html',
  styleUrl: './adicionar-despesa.component.css'
})
export class AdicionarDespesaComponent {

}

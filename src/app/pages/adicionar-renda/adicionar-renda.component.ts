import { Component } from '@angular/core';
import { TransacaoComponent } from '../../components/transacao/transacao.component';

@Component({
  selector: 'app-adicionar-renda',
  standalone: true,
  imports: [
    TransacaoComponent
  ],
  templateUrl: './adicionar-renda.component.html',
  styleUrl: './adicionar-renda.component.css'
})
export class AdicionarRendaComponent {

}

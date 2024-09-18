import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CrudService } from '../../services/crud.service';
import { RetornoTransacao } from '../../models/IProjetos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NavbarComponent,
    SidebarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private crudService: CrudService) {

  }

  ngOnInit(): void {
    
  }

  listarAllTransacoes(rendaDespesa: string): void {
    const lista: RetornoTransacao[] = [];
    this.crudService.getAllRendas(rendaDespesa).snapshotChanges().subscribe((data) => {

      
      data.forEach((item) => {
        let transacao: object = item.payload.toJSON()!;
        let chave: string = item.key!
        let objeto = {
          chave: chave,
          transacao
        }
        lista.push(objeto);        
      });
      
    });
    console.log(lista);
  }
}

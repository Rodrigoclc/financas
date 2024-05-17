import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Transacao } from '../models/IProjetos';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  transacoesRef!: AngularFireList<any>

  constructor(private db: AngularFireDatabase) {}

  getAllRendas(dbPath: string) {
    this.transacoesRef = this.db.list(dbPath);
    return this.transacoesRef;
  }

  getTransacao(dbPath: string, chave: string) {
  this.transacoesRef = this.db.list(dbPath);
    return this.db.object(`${dbPath}/${chave}`);
  }

  adicionarTransacao(dbPath: string, transacao: Transacao) {
  this.transacoesRef = this.db.list(dbPath);
    this.transacoesRef.push(transacao);
  }

  atualizarTransacao(dbPath: string, chave: string, transacao: Transacao) {
  this.transacoesRef = this.db.list(dbPath);
    this.transacoesRef.update(chave, transacao);
  }

  deletarTransacao(dbPath: string, chave: string) {
    this.transacoesRef = this.db.list(dbPath);
    return this.transacoesRef.remove(chave);
  }
}

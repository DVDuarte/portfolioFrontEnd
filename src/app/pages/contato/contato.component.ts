import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    if (this.name && this.email && this.message) {
      alert('Mensagem enviada com sucesso!');
      // Aqui, você pode adicionar lógica para enviar o formulário para um servidor ou serviço de email
      this.name = '';
      this.email = '';
      this.message = '';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}

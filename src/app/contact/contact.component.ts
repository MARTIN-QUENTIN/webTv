import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})


export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Vous pouvez ajouter ici la logique pour traiter le formulaire, par exemple, envoyer une requête HTTP.
    console.log('Formulaire soumis :', this.contactForm);
  }
}
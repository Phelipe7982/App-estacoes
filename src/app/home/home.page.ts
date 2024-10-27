import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  constructor(private modalController: ModalController) {}
  // Função do botão de dar efeito a imagem
  mudarImg(id: string) {
    // Referência da imagem
    const imagem = document.getElementById(id) as HTMLImageElement;
    if (imagem) {
      imagem.style.filter = 'blur(8px)';
    }
  }


  // Função do botão de tirar o efeito da imagem
  voltarImg(id: string) {
    const imagem = document.getElementById(id) as HTMLImageElement;
    if (imagem) {
      imagem.style.filter = 'none';
    }
  }


  // Refresh da página
  handleRefresh(event:any) {
    setTimeout(() => {
      //O código adicional aqui!
      event.target.complete();
    }, 2000);
  }


  // Código do modal
  isModalOpen:boolean = false;


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  items = [
    {
      nome: 'LÁMEN PICANTE',
      imagem: 'https://cdn.shopify.com/s/files/1/0097/2013/5731/products/beef_e3e61b80-3d35-4f42-a484-1592150bac3d_1000x.png',
      preco: 39.99
    },
    {
      nome: 'PÃO DE FORMA',
      imagem: 'https://s.cornershopapp.com/product-images/2379642.png?versionId=veFmf.vZWXFcUOMeQHGbVtwuuunwoDL5',
      preco: 29.99
    },
    {
      nome: 'BOLINHO DE ARROZ',
      imagem: 'https://cdn140.picsart.com/289276163022211.png',
      preco: 14.98
    }
  ];

  constructor() {}

}

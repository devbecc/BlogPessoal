import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-post-tema',
  templateUrl: './post-tema.component.html',
  styleUrls: ['./post-tema.component.css']
})

export class PostTemaComponent implements OnInit {


tema: Tema = new Tema()
listaTemas:Tema[]


  constructor(private temaService:TemaService, private router: Router) { }

  ngOnInit()  {

    this.findAllTemas()
  }




  findByIdTema(){

    this.temaService.getByIdTema(this.tema.id).subscribe((resp:Tema)=>{
      this.tema = resp;
      
    })

}


findAllTemas(){

  this.temaService.getAllTemas().subscribe((resp:Tema[]) => {
    this.listaTemas = resp
  })
}
  
cadastrar(){

  if (this.tema.descricao == null) {

    alert('preencha o campo')

  }else{

    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema=resp
      this.router.navigate(['/feed'])
      alert('tema cadastrado com sucesso')

    })

  }
  }
}



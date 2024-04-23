import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategorieService} from "../services/categorie.service";
import {Categorie} from "../models/Categorie";
import {ArticleService} from "../services/article.service";
import {AuthState} from "../models/AuthState";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  articleForm!: FormGroup
  categories: Array<Categorie> = new Array<Categorie>();
  filesToUpload: File[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategorieService,
    private articleService: ArticleService,
    private authState: AuthState,
    private toastrService:ToastrService,
    private routerService:Router
  ) {
  }

  ngOnInit(): void {
    this.categoriesService.getAllArticles().subscribe({
      next: categories => {
        this.categories = categories;
        console.log("Les catégories" + categories)
      }, error: error => {
        console.log(error);
      }
    })
    this.articleForm = this.formBuilder.group(
      {
        nomArticle: ['', Validators.required],
        descriptionArticle: ['', Validators.required],
        qttStock: ['', Validators.required],
        idCategorie: ['', Validators.required]
      }
    );
  }

  ajouterArticle(): void {
    if (this.articleForm.valid) {
      const formData = new FormData();
      formData.append("nomArticle",this.articleForm.value.nomArticle)
      formData.append("descriptionArticle",this.articleForm.value.descriptionArticle)
      formData.append("qttStock",this.articleForm.value.qttStock)
      formData.append("idCategorie",this.articleForm.value.idCategorie)
      for (let image of this.filesToUpload){
        formData.append("images",image,image.name);
      }
      this.articleService.addArticles(formData, this.authState.user.idUtilisateur)
        .subscribe({
          next: articlesAdded => {
              this.toastrService.success("L'article est ajouter avec succées","Success");
              this.routerService.navigateByUrl("G17GB/admin/list-article")
          },
          error: err => {
            this.toastrService.error("L'ajout de l'article  échouer","Erreur")
          }
        });
    } else {
      console.error("Le formulaire est invalide.");
    }
  }


  onFilesAdded(event: any) {
    this.filesToUpload = event.target.files
  }
}

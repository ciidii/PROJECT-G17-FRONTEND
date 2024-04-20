import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategorieService} from "../services/categorie.service";
import {Categorie} from "../models/Categorie";
import {NgxDropzoneChangeEvent} from "ngx-dropzone";
import {ArticleService} from "../services/article.service";
import {AuthState} from "../models/AuthState";
import {FormDataImpl} from "../interfaces/FormDataImpl";
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  articleForm!: FormGroup
  categories: Array<Categorie> = new Array<Categorie>();
  filesToUpload: File[] = new Array<File>();

  constructor(private formBuilder: FormBuilder, private categoriesService: CategorieService, private articleService: ArticleService, private authState: AuthState) {
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
      });
  }

  ajouterArticle(): void {
    if (this.articleForm.valid) {
      const formData = new FormData();
      // formData.append("nomArticle", this.articleForm.value.nomArticle);
      // formData.append("descriptionArticle", this.articleForm.value.descriptionArticle);
      // formData.append("qttStock", this.articleForm.value.qttStock);
      // formData.append("idCategorie", this.articleForm.value.idCategorie);
      this.filesToUpload.forEach((image)=>{
        formData.append("files",image);
        console.log(typeof (formData))
      })
      console.log(typeof (formData));
      this.articleService.ajouterArticle(formData, this.authState.user.idUtilisateur).subscribe(
        {
          next: articlesAdded => {
            console.log(articlesAdded);
          }, error: err => {
            console.log(err);
          }
        }
      );
    } else {
      console.error("Le formulaire est invalide.");
    }
  }

  onFilesAdded(event: NgxDropzoneChangeEvent) {
    this.filesToUpload = event.addedFiles;
    console.log(event.addedFiles)
  }
}

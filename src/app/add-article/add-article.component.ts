import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  articleForm!: FormGroup

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      nomArticle: ['', Validators.required],
      descriptionArticle: ['', Validators.required],
      qttStock: ['', Validators.required],
      estVendable: [false],
      estParametrer: [false],
      prix: ['', Validators.required]
    });
  }
  ajouterArticle(): void {
    if (this.articleForm.valid) {
      console.log(this.articleForm.value);
      this.articleForm.reset();
    } else {
      console.error("Le formulaire est invalide.");
    }
  }

}

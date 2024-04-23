import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{
  articles!:any
    constructor(private articleService: ArticleService) {
    }

  ngOnInit(): void {
      this.articleService.getAllArticles().subscribe({
        next:articles=>{
          this.articles=articles;
        },
        error:err => {
          console.log(err);
        }
      })
    }

}

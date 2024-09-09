import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-articleoverview',
  templateUrl: './articleoverview.component.html',
  styleUrls: ['./articleoverview.component.css']
})
export class ArticleoverviewComponent implements OnInit {

  articleTitle = '開發日誌 | 3/30 機制再啟動';
  articleDate = '2021年04月14日 05:28';
  articleViews = '2.4萬';
  articleLikes = 104000;
  articleComments = '--';
  authorName = '漢化';
  authorFollowers = '2.4萬';
  authorArticles = '303';
  articleImage = 'assets/article-image-placeholder.png'; // 替換為實際圖片路徑
  articleContent = `Europa Universalis IV - 30th of March 2021
Johan, Studio Manager Paradox Tinto`;
  article: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const articleId = +params.get('id')!; // 使用非空断言
      this.dataService.getArticleById(articleId).subscribe(data => {
        this.article = data; // 根据 articleId 获取数据
      });
    });
  }

  likes(): void {
    this.articleLikes++;
  }

  subscribeChannel(): void {
    console.log('訂閱頻道');
  }

  followAuthor(): void {
    console.log('已關注作者');
  }
  recommendedVideos = [
    {
      id: 1,
      title: '推薦文章1',
      thumbnail: 'assets/video-thumbnail1.jpg'
    },
    {
      id: 2,
      title: '推薦文章2',
      thumbnail: 'assets/video-thumbnail2.jpg'
    },
    {
      id: 3,
      title: '推薦文章3',
      thumbnail: 'assets/video-thumbnail3.jpg'
    }

  ];

}

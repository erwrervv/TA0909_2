import { Component, OnInit } from '@angular/core';

interface Comment {
  userAvatar: string;
  username: string;
  time: Date;
  content: string;
  likes: number;
}

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments: Comment[] = [];

  ngOnInit(): void {
    // 初始化評論數據（可以替換為從服務器獲取的數據）
    this.comments = [
      {
        userAvatar: 'assets/avatar1.png',
        username: 'Glamourgonn',
        time: new Date(),
        content: '心虛咯retard, 你們寫大方向子寫了2秒，老等了才把課本按好沒關詞',
        likes: 87
      },
      {
        userAvatar: 'assets/avatar2.png',
        username: '木木彬彬',
        time: new Date(),
        content: 'Take this! : tayler hills',
        likes: 231
      },
      // 更多評論數據...
    ];
  }

  likeComment(comment: Comment): void {
    comment.likes++;
  }

  replyComment(comment: Comment): void {
    console.log('Reply to comment:', comment);
    // 可以添加回覆功能的邏輯
  }
}

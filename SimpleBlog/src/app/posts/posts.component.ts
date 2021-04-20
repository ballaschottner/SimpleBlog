import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  imgLink: string = 'https://picsum.photos/600/200';

  @Input()
  data: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log("Posts array", this.data)
  }

}

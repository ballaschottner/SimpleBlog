import { Component } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  body: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleBlog';

  posts: Post[] = [
    {
      id:1,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dolore doloremque facilis fuga illo temporibus vitae? Ad explicabo hic impedit incidunt iure maxime sed similique tempora unde? A ab architecto assumenda error fuga impedit incidunt itaque iusto laudantium libero mollitia, necessitatibus nesciunt non perferendis possimus praesentium quae quia quidem recusandae repellat sequi sit, ullam vitae! Accusantium amet commodi corporis delectus esse expedita inventore labore non vero voluptate. Accusantium ad aliquam consequuntur dolore dolorum, eligendi eos exercitationem facere nisi omnis pariatur perspiciatis placeat, unde. Aspernatur ducimus eligendi expedita harum maiores, maxime natus odit optio perferendis, quia quibusdam sint soluta velit?"
    },
    {
      id:2,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dolore doloremque facilis fuga illo temporibus vitae? Ad explicabo hic impedit incidunt iure maxime sed similique tempora unde? A ab architecto assumenda error fuga impedit incidunt itaque iusto laudantium libero mollitia, necessitatibus nesciunt non perferendis possimus praesentium quae quia quidem recusandae repellat sequi sit, ullam vitae! Accusantium amet commodi corporis delectus esse expedita inventore labore non vero voluptate. Accusantium ad aliquam consequuntur dolore dolorum, eligendi eos exercitationem facere nisi omnis pariatur perspiciatis placeat, unde. Aspernatur ducimus eligendi expedita harum maiores, maxime natus odit optio perferendis, quia quibusdam sint soluta velit?"
    },
    {
      id:3,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dolore doloremque facilis fuga illo temporibus vitae? Ad explicabo hic impedit incidunt iure maxime sed similique tempora unde? A ab architecto assumenda error fuga impedit incidunt itaque iusto laudantium libero mollitia, necessitatibus nesciunt non perferendis possimus praesentium quae quia quidem recusandae repellat sequi sit, ullam vitae! Accusantium amet commodi corporis delectus esse expedita inventore labore non vero voluptate. Accusantium ad aliquam consequuntur dolore dolorum, eligendi eos exercitationem facere nisi omnis pariatur perspiciatis placeat, unde. Aspernatur ducimus eligendi expedita harum maiores, maxime natus odit optio perferendis, quia quibusdam sint soluta velit?"
    },
    {
      id:4,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dolore doloremque facilis fuga illo temporibus vitae? Ad explicabo hic impedit incidunt iure maxime sed similique tempora unde? A ab architecto assumenda error fuga impedit incidunt itaque iusto laudantium libero mollitia, necessitatibus nesciunt non perferendis possimus praesentium quae quia quidem recusandae repellat sequi sit, ullam vitae! Accusantium amet commodi corporis delectus esse expedita inventore labore non vero voluptate. Accusantium ad aliquam consequuntur dolore dolorum, eligendi eos exercitationem facere nisi omnis pariatur perspiciatis placeat, unde. Aspernatur ducimus eligendi expedita harum maiores, maxime natus odit optio perferendis, quia quibusdam sint soluta velit?"
    },
    {
      id:5,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dolore doloremque facilis fuga illo temporibus vitae? Ad explicabo hic impedit incidunt iure maxime sed similique tempora unde? A ab architecto assumenda error fuga impedit incidunt itaque iusto laudantium libero mollitia, necessitatibus nesciunt non perferendis possimus praesentium quae quia quidem recusandae repellat sequi sit, ullam vitae! Accusantium amet commodi corporis delectus esse expedita inventore labore non vero voluptate. Accusantium ad aliquam consequuntur dolore dolorum, eligendi eos exercitationem facere nisi omnis pariatur perspiciatis placeat, unde. Aspernatur ducimus eligendi expedita harum maiores, maxime natus odit optio perferendis, quia quibusdam sint soluta velit?"
    },
    {
      id:6,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dolore doloremque facilis fuga illo temporibus vitae? Ad explicabo hic impedit incidunt iure maxime sed similique tempora unde? A ab architecto assumenda error fuga impedit incidunt itaque iusto laudantium libero mollitia, necessitatibus nesciunt non perferendis possimus praesentium quae quia quidem recusandae repellat sequi sit, ullam vitae! Accusantium amet commodi corporis delectus esse expedita inventore labore non vero voluptate. Accusantium ad aliquam consequuntur dolore dolorum, eligendi eos exercitationem facere nisi omnis pariatur perspiciatis placeat, unde. Aspernatur ducimus eligendi expedita harum maiores, maxime natus odit optio perferendis, quia quibusdam sint soluta velit?"
    }
  ];
}

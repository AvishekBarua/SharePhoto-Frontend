import {Photo} from 'app/models/photo';
import {User} from 'app/models/user';

export class Comment {
  commentId: number;
  photo: Photo;
  userName: string;
  content: string;
  photoId: number;
}

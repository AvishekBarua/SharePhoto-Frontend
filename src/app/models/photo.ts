import {Comment} from 'app/models/comment';
import {User} from 'app/models/user';

export class Photo {
  public photoId: number;
  public photoName: string;
  public title: string;
  public description: string;
  public user: User;
  public imageName: string;
  public likedByUserList: User[];
  public likes: number;
  public commentList: Comment[];
  public created: Date;
}

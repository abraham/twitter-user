import { User as UserData, UserEntities } from 'twitter-d';

export class User {
  private _data: UserData;

  constructor(user: UserData) {
    this._data = user;
  }

  public get id(): string {
    return this._data.id_str;
  }

  public get createdAt(): Date {
    return new Date(Date.parse(this._data.created_at));
  }

  public get bannerUrl(): string | undefined {
    return this._data.profile_banner_url || undefined;
  }

  public get name(): string {
    return this._data.name;
  }

  public get followersCount(): number {
    return this._data.followers_count;
  }

  public get friendsCount(): number {
    return this._data.friends_count;
  }

  public get listedCount(): number {
    return this._data.listed_count;
  }

  public get likesCount(): number {
    return this._data.favourites_count;
  }

  public get statusesCount(): number {
    return this._data.statuses_count;
  }

  public get description(): string {
    return this._data.description;
  }

  public get entities(): UserEntities {
    return this._data.entities;
  }

  public get screen_name(): string {
    return this._data.screen_name;
  }

  public get location(): string {
    return this._data.location;
  }

  public get primaryColor(): string {
    return `#${this._data.profile_link_color}`;
  }

  public get backgroundColor(): string {
    return `#${this._data.profile_background_color}`;
  }

  public get url(): string | undefined {
    return this._data.url || undefined;
  }

  public get displayUrl(): string | undefined {
    if (!this.entities.url) { return; }
    const url = (this.entities.url.urls || []).find(entity => {
      return entity.url == this._data.url;
    });
    return url ? url.display_url : undefined;
  }

  public get profileUrl(): string {
    return `https://twitter.com/${this._data.screen_name}`;
  }

  public get profileImageUrl(): string {
    return this._data.profile_image_url_https.replace('_normal.', '_400x400.');
  }

  public get verified(): boolean {
    return this._data.verified;
  }
}

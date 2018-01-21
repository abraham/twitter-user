import { Entities } from './entities';

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

  public get bannerUrl(): string {
    return this._data.profile_banner_url;
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

  public get entities(): Entities {
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

  public get url(): string {
    return this._data.url;
  }

  public get displayUrl(): string {
    const url = this.entities.url.urls.find(entity => {
      return entity.url == this._data.url;
    });
    if (url) {
      return url.display_url;
    } else {
      return '';
    }
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

export interface UserData {
  contributors: number[] | null,
  contributors_enabled: boolean,
  created_at: string,
  default_profile_image: boolean,
  default_profile: boolean,
  description: string,
  entities: Entities,
  favourites_count: number,
  follow_request_sent: boolean,
  followers_count: number,
  following: boolean,
  friends_count: number,
  geo_enabled: boolean,
  has_extended_profile: boolean,
  id_str: string,
  id: number,
  is_translation_enabled: boolean,
  is_translator: boolean,
  lang: string,
  listed_count: number,
  location: string,
  name: string,
  notifications: boolean,
  profile_background_color: string,
  profile_background_image_url_https: string,
  profile_background_image_url: string,
  profile_background_tile: boolean,
  profile_banner_url: string,
  profile_image_url_https: string,
  profile_image_url: string,
  profile_link_color: string,
  profile_sidebar_border_color: string,
  profile_sidebar_fill_color: string,
  profile_text_color: string,
  profile_use_background_image: boolean,
  protected: boolean,
  screen_name: string,
  statuses_count: number
  time_zone: string,
  translator_type: string,
  url: string,
  utc_offset: number,
  verified: boolean,
}

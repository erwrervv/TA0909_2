export interface Articleoverviews {
  ArticleId: number;
  // MemberName?:string;
  MemberuniqueId: BasicMemberInformation;
  ArticleName?: string;
  ArticleContent?: string;
  CreateTime?: Date;
  UpdateTime?: Date;
  ArticleCoverImage?: Uint8Array;
  ArticleCoverImageString?: string;
}
export interface BasicMemberInformation {
  MemberName: string;
}

import { StringLiteral } from "typescript";

export interface MemberViewDto {
  member_id: number;
  name: string;
  image: string;
  number: string;
}

export interface CardDto {
  project_id: number;
  thumbnail: string;
  project_name: string;
  tags: TagDto[];
  wrote_member: MemberViewDto;
  likes: number;
  comments: number;
}

export interface TagDto {
  tag_id: number;
  name: string;
  color: string;
  categories: number[];
}

export interface TagData {
  tagId: number;
  name: string;
  color: string;
  selected: boolean;
}

export interface CategoryDto {
  category_id: number;
  name: string;
  tags: number[];
}

export interface ProjectDto{
  thumnail: string;
  projectName: string;
  wroteMember: MemberViewDto;
  contributedMembers: MemberViewDto[];
  startDate: string;
  endDate: string;
  tags: TagDto[];
  github: string[];
  detail: string;
  contents: string;
  views: number;
  likes: number;
  createdDate: string;
  modifiedDate: string;
}

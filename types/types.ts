// 노션에서 받아온 전체 데이터 타입
export type NotionProjectDataType = {
  object: string;
  results: {
    object: string;
    id: string;
    created_time: string;
    last_edited_time: string;
    created_by: any;
    last_edited_by: any;
    cover: any;
    icon: any;
    parent: any;
    archived: boolean;
    properties: any;
    url: string;
  }[];
  next_cursor: any;
  has_more: boolean;
  type: string;
  page: any;
};

export type ProjectDataType = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: any;
  last_edited_by: any;
  cover: any;
  icon: any;
  parent: any;
  archived: boolean;
  properties: any;
  url: string;
};

export type ProjectsProps = {
  data: NotionProjectDataType["results"][0];
};

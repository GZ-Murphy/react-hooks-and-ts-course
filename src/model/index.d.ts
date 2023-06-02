

declare module "my-model" {
  export interface UserListModel {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Datum[];
    support: Support;
  }
  
  export interface Support {
    url: string;
    text: string;
  }
  
  export interface Datum {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }
}
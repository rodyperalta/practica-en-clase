export interface Artinstitute {
    preference: null;
    pagination: Pagination;
    data:       Datum[];
    info:       Info;
    config:     Config;
}

export interface Config {
    iiif_url:    string;
    website_url: string;
}

export interface Datum {
    _score:     number;
    thumbnail:  Thumbnail;
    api_model:  APIModel;
    is_boosted: boolean;
    api_link:   string;
    id:         number;
    title:      string;
    timestamp:  Date;
}

export enum APIModel {
    Artworks = "artworks",
}

export interface Thumbnail {
    alt_text: string;
    width:    number;
    lqip:     string;
    height:   number;
}

export interface Info {
    license_text:  string;
    license_links: string[];
    version:       string;
}

export interface Pagination {
    total:        number;
    limit:        number;
    offset:       number;
    total_pages:  number;
    current_page: number;
}

export async function fetchData<Type>(url: string): Promise<Type> {
    return fetch(url).then(response => response.json());
}



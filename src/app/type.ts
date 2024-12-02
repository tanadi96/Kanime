export type anime = {
  mal_id: number;
  url: string;
  images: {
    jpg: AnimeImage;
    webp: AnimeImage;
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: TrailerImage;
  };
  approved: boolean;
  titles: Array<{ type: string; title: string }>;
  title: string;
  title_english: string | null;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: AiringPeriod;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string | null;
  year: string | null;
  broadcast: { day: string | null; time: string | null; timezone: string | null; string: string | null };
  producers: Producer[];
  licensors: string[];
  studios: Studio[];
  genres: Genre[];
  }

  interface AnimeImage {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  }
  
  interface TrailerImage {
    image_url: string;
    small_image_url: string;
    medium_image_url: string;
    large_image_url: string;
    maximum_image_url: string;
  }
  
  interface Producer {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  
  interface Studio {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  
  interface Genre {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
  
  interface AiringPeriod {
    from: string;
    to: string | null;
    prop: { from: Record<string, unknown>; to: Record<string, unknown> };
    string: string;
  }
  
  export type detailAnime ={
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    trailer: {
      youtube_id: string;
      url: string;
      embed_url: string;
    };
    title: string;
    synopsis: string;
    year:string
    score: number;
    type: string;
    episodes: number;
    rating: string; 
    status: string;
    rank: number;
  }


  export type DataEntry ={
    mal_id: string;
    entry: Entry[];
    content: string;
  }

  interface Entry {
    mal_id: number;
    url: string;
    images: ImageUrls;
    title: string;
  }
  
  interface ImageUrls {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  }
  
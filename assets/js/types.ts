type params = {
  urlType?: boolean;
  name?: string;
  orderBy?: Selection;
  limit?: number;
  offset?: number;
};

type Comic = {
  id?: number;
  thumbnail?: {
    path?: string;
    extension?: string;
  };
  title?: string;

  creators?: {
    items?: string[];
    returned?: number;
  };
  description?: string;

  characters?: {
    items?: string[];
  };
};

type Character = {
  id?: number;
  thumbnail?: {
    path?: string;
    extension?: string;
  };
  name?: string;
  description?: string;
  stories?: {
    items?: [
      {
        resourceURI?: string;
        name?: string;
      }
    ];
  };
};

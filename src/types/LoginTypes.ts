
export type userDataType = {
  '@context'?: string;
  '@id'?: string;
  '@type'?: string;
  email?: string;
  firstName?: string;
  id?: number;
  city?: {
    id: number;
    name: string;
  };
  lastName?: string;
  password?: string;
  roles?: string[];
  username?: string;
  avatar?: string;
  liked?: string;
  image?: {
    '@id'?: string;
    '@type'?: string;
    contentUrl?: string;
    id?: number;
  };
};

import {
  createDirectus,
  rest,
  authentication,
  DirectusClient,
  RestClient,
  AuthenticationClient,
} from "@directus/sdk";

import { API } from "./constants";

export interface Post {
  id: number;
  title: string;
  content: string;
}

export interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
}

export interface Schema {
  posts: Post[];
  users: User[];
}

type ExtendedDirectusClient = DirectusClient<Schema> &
  RestClient<Schema> &
  AuthenticationClient<Schema> & {
    users: {
      me: {
        read: () => Promise<User>;
      };
    };
    // The login and logout methods exist directly on the client now:
    login: (credentials: { email: string; password: string }) => Promise<void>;
    logout: () => Promise<void>;
    authToken?: string; // SDK exposes this if you want to check token presence
  };

export const directus = createDirectus<Schema>(API)
  .with(authentication("json"))
  .with(rest()) as ExtendedDirectusClient;

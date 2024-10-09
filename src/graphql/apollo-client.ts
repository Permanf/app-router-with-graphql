import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { REFRESH_TOKEN } from "./mutations/auth";
import IRefreshToken from "@/interfaces/auth";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_BASE_URL,
});

const authLink = setContext(async (_, { headers }) => {
  const refreshToken = localStorage.getItem("refresh_token");

  if (refreshToken) {
    try {
      const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
      });

      const { data } = await client.mutate<IRefreshToken>({
        mutation: REFRESH_TOKEN,
        variables: { refreshToken },
      });

      if (data && data.refreshToken) {
        const accessToken = data.refreshToken.access_token;

        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", data.refreshToken.refresh_token);

        return {
          headers: {
            ...headers,
            authorization: `Bearer ${accessToken}`,
          },
        };
      } else {
        console.error("No data or refresh token received");
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  }

  return {
    headers: {
      ...headers,
      authorization: "",
    },
  };
});

const createApolloClient = () => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;

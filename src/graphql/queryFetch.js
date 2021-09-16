export default function queryFetch(query, variables) {
  return fetch("https://set-buck-38.hasura.app/v1/graphql", {
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret":
        "gO4MGR2VQNnEaizYTEV1t7VdbdR60j5T8Je8DK0kdxlVmoOOyhdN1A7338fxa7Ww",
    },
    method: "POST",
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  }).then((res) => res.json());
}

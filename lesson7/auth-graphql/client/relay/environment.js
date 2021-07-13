//@ts-check
import { Environment, Network, RecordSource, Store } from "relay-runtime";
import axios from "axios";

async function fetchQuery(request, variables) {
  const { data } = await axios.post(
    "/graphql",
    {
      query: request.text,
      variables,
    },
    { withCredentials: true }
  );
  return data;
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

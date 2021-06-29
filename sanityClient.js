import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "tz6k1w72", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  apiVersion: "v1",
  useCdn: true // `false` if you want to ensure fresh data
});

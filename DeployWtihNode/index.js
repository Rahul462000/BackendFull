// dot env is a production ready package
import "dotenv/config";
import express from "express";
const app = express();
const portNumner = 5000;

const gitHubData = {
  login: "Rahul462000",
  id: 53445658,
  node_id: "MDQ6VXNlcjUzNDQ1NjU4",
  avatar_url: "https://avatars.githubusercontent.com/u/53445658?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Rahul462000",
  html_url: "https://github.com/Rahul462000",
  followers_url: "https://api.github.com/users/Rahul462000/followers",
  following_url:
    "https://api.github.com/users/Rahul462000/following{/other_user}",
  gists_url: "https://api.github.com/users/Rahul462000/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Rahul462000/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Rahul462000/subscriptions",
  organizations_url: "https://api.github.com/users/Rahul462000/orgs",
  repos_url: "https://api.github.com/users/Rahul462000/repos",
  events_url: "https://api.github.com/users/Rahul462000/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Rahul462000/received_events",
  type: "User",
  site_admin: false,
  name: "Rahl462000",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: true,
  bio: "college student .",
  twitter_username: null,
  public_repos: 10,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2019-07-29T17:38:34Z",
  updated_at: "2023-03-23T14:42:02Z",
};

app.get("/", (req, res) => {
  res.send("hello evryone");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>chai aur code</h2>");
});

// this is how you pass json data in routing with express
app.get("/githubData", (req, res) => {
  res.json(gitHubData);
});

// calling here the env with port number decalre on .env file
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${portNumner}`);
});

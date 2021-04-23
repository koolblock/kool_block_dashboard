const dotenv = require("dotenv").config();
const { Keystone } = require("@keystonejs/keystone");
const { NextApp } = require("@keystonejs/app-next");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const PROJECT_NAME = "KoolBlock";
const adapterConfig = {
  mongoUri: process.env.MONGO_URI,
};

const isAdmin = ({ authentication: { item: user } }) => {
  return !!user && !!user.isAdmin;
};

const isLoggedIn = ({ authentication: { item: user } }) => {
  return !!user;
};

const PostSchema = require("./list/Post");
const UserSchema = require("./list/User");

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookie: {
    secure: true,
  },
  cookieSecret: process.env.COOKIE_SECRET,
});

keystone.createList("Post", {
  fields: PostSchema.fields,
  access: {
    read: true,
    create: isLoggedIn,
    update: isLoggedIn,
    delete: isLoggedIn,
  },
});

keystone.createList("User", {
  fields: UserSchema.fields,
  access: {
    read: true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  hidden: true,
});

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
  config: {
    identityField: "email",
    secretField: "password",
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: false,
      adminPath: "/admin",
      authStrategy,
      isAccessAllowed: isAdmin,
    }),
    new NextApp({ dir: "app" }),
  ],
  configureExpress: (app) => {
    app.set("trust proxy", 1);
  },
};

module.exports = {
  token: process.env.token || "", // Your bot token
  channelId: process.env.channelId || "", //Channel Id you want to send the message

  nodes: [
    {
      host: "nodelink-sbj8.onrender.com",
      password: "youshallnotpass",
      port: 2333,
      identifier: "1",
      secure: true,
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
    {
      host: "nodelink-sbj8.onrender.com",
      password: "youshallnotpass",
      port: 2333,
      identifier: "2",
      secure: true,
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
    {
      host: "nodelink-sbj8.onrender.com",
      password: "youshallnotpass",
      port: 2333,
      identifier: "3",
      secure: true,
      reconnectTimeout: 300000,
      reconnectTries: 100,
    },
  ],
};

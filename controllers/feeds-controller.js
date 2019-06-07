const Feed = require('../models/feed-model');
const Parser = require('rss-parser');
const parser = new Parser({ timeout: 5000 });
 
const getFeed = async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) return getFeeds(req, res);

    const feed = await parser.parseURL(url);

    return res.status(200).json(feed);
  } catch (err) {
    return res.status(500).json({ message: `Cannot retrieve rss feed from this url: ${req.query.url}` });
  }
};

const getFeeds = async (req, res) => {
    const allFeeds = await Feed.find().select('username feeds');
    return res.status(200).json(allFeeds);
};

const registerFeed = async (req, res) => {
    try {
      const { username, title, url } = req.body;
      await Feed.findOneAndUpdate(
          { username },
          { username, $push: { feeds: { title, url } } },
          { upsert: true, runValidators: true }
      );
      return res.status(200).json({ message: 'Feed added!' });
    } catch (err) {
      return res.status(500).json(err);
    }
};

const deleteFeed = async (req, res) => {
    try {
      const { feedId, feedItemId } = req.body;

      await Feed.update(
        { _id: feedId },
        { $pull: { feeds: { _id: feedItemId } } },
        { runValidators: true }
      );

      return res.status(200).json({ message: 'Feed deleted!' });
    } catch (err) {
      return res.status(500).json(err);
    }
};

module.exports = { registerFeed, deleteFeed, getFeed };

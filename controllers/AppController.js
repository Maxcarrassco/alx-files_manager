#!/usr/bin/node

const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');

class AppController {
  static getStatus(req, res) {
    if (redisClient.isAlive() && dbClient.isAlive()) {
      res.json({ redis: true, db: true });
      res.end();
    }
  }

  static getStats(req, res) {
    const users = dbClient.nbUsers();
    const files = dbClient.nbFiles();
    res.json({ users: users, files: files });
    res.end();
  }
}

module.exports = AppController;

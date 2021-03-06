<p align="center">
<img src="https://i.loli.net/2019/04/23/5cbeb7e41414c.png" alt="RSSHub" width="100">
</p>
<h1 align="center">RSSHub</h1>

> 🍰 Everything is RSSible

[![telegram](https://img.shields.io/badge/chat-telegram-brightgreen.svg?style=flat-square)](https://t.me/rsshub)
[![build status](https://img.shields.io/travis/DIYgod/RSSHub/master.svg?style=flat-square)](https://travis-ci.org/DIYgod/RSSHub)
[![Test coverage](https://img.shields.io/codecov/c/github/DIYgod/RSSHub.svg?style=flat-square)](https://codecov.io/github/DIYgod/RSSHub?branch=master)

## Introduction

RSSHub is an open source, easy to use, and extensible RSS feed generator. It's capable of generating RSS feeds from pretty much everything.

RSSHub delivers millions of contents aggregated from all kinds of sources, our vibrant open source community is ensuring the deliver of RSSHub's new routes, new features and bug fixes.

RSSHub can be used with browser extension [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar) and mobile auxiliary app [RSSBud](https://github.com/Cay-Zhang/RSSBud) (iOS) and [RSSAid](https://github.com/LeetaoGoooo/RSSAid) (Android)

[English docs](https://docs.rsshub.app/en) | [Telegram Group](https://t.me/rsshub) | [Telegram Channel](https://t.me/awesomeRSSHub)

---

RSSHub 是一个开源、简单易用、易于扩展的 RSS 生成器，可以给任何奇奇怪怪的内容生成 RSS 订阅源。RSSHub 借助于开源社区的力量快速发展中，目前已适配数百家网站的上千项内容

可以配合浏览器扩展 [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar) 和 移动端辅助 App [RSSBud](https://github.com/Cay-Zhang/RSSBud) (iOS) 与 [RSSAid](https://github.com/LeetaoGoooo/RSSAid) (Android) 食用

[中文文档](https://docs.rsshub.app) | [Telegram 群](https://t.me/rsshub) | [Telegram 频道](https://t.me/awesomeRSSHub)

## 个人添加的RSS网站路由

| 栏目1 | 栏目2 |
| ----- | ----- |
| 内容1 | 内容2 |

```
router.get('/loog_zyc/kjt', require('./routes/loog/zyc/kjt')); 
router.get('/loog_zyc/gggs', require('./routes/loog/zyc/gggs'));
router.get('/loog_zyc/wjtz', require('./routes/loog/zyc/wjtz'));
router.get('/loog_zyc/kjt_zcwj', require('./routes/loog/zyc/kjt_zcwj'));
router.get('/loog_zyc/zzskjj', require('./routes/loog/zyc/zzskjj'));
router.get('/loog_zyc/kjjh_tztg', require('./routes/loog/zyc/kjjh_tztg'));
```






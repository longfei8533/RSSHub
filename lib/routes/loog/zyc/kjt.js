const got = require('@/utils/got');
const cheerio = require('cheerio');

async function getNewsDetail(link) {
    const res = await got.get(link);
    const $ = cheerio.load(res.data);
    return {
        author: $('.articl_u1 span').eq(1).text(),
        description: $('.articl_u2').html(),
    };
}

module.exports = async (ctx) => {
    const url = 'http://kjt.henan.gov.cn/tzgg/';
    const response = await got.get(url);
    const $ = cheerio.load(response.data);

    const out = await Promise.all(
        $('.list_u1 li')
            .slice(0, 10)
            .map(async (index, item) => {
                item = $(item);
                const link = $(item).find('li a').attr('href');
                const title = $(item).find('li a').text();
                const pubDate = $(item).find('li span').text();
                const single = {
                    title,
                    link,
                    pubDate,
                };
                let other = {};
                const cache = await ctx.cache.get(link);
                if (cache) {
                    other = JSON.parse(cache);
                } else {
                    other = await getNewsDetail(link);
                    ctx.cache.set(link, JSON.stringify(other));
                }

                return Promise.resolve(Object.assign({}, single, other));
            })
            .get()
    );

    ctx.state.data = {
        title: '河南科技网',
        link: url,
        description: '通知公告',
        item: out
           
    };
};

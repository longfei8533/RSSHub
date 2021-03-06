const got = require('@/utils/got');
const cheerio = require('cheerio');

async function getNewsDetail(link) {
    const res = await got.get(link);
    const $ = cheerio.load(res.data);
    return {
        author: $('.article .fun span').eq(2).text(),
        description: $('.article .det').html(),
    };
}

module.exports = async (ctx) => {
    const url = 'http://jyt.henan.gov.cn/xxgk/wjtz/';
    const response = await got.get(url);
    const $ = cheerio.load(response.data);

    const out = await Promise.all(
        $('.list li')
            .slice(0, 10)
            .map(async (index, item) => {
                item = $(item);
                const link = $(item).find('li a').attr('href');
                const title = $(item).find('li a').text();
                const pubDate = $(item).find('li span').eq(0).text();
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
        title: '河南省教育厅--文件通知',
        link: url,
        description: '文件通知',
        item: out
           
    };
};

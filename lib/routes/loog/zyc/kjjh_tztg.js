const got = require('@/utils/got');
const cheerio = require('cheerio');

async function getNewsDetail(link) {
    const res = await got.get(link);
    const $ = cheerio.load(res.data);
    return {
        author: $('.out30 div').eq(1).text(),
        description: $('.section1').html(),
    };
}

module.exports = async (ctx) => {
    const url = 'https://service.most.gov.cn/kjjh_tztg_all/';
    const response = await got.get(url);
    const $ = cheerio.load(response.data);

    const out = await Promise.all(
        $('#lista0 .tr_normal')
            .slice(0, 10)
            .map(async (index, item) => {
                item = $(item);
                const link0 = $(item).find('td').eq(1).find('a').attr('onclick');
                const link = 'https://service.most.gov.cn' + link0.split("'")[1].split("..")[1];
                console.log(link);
                const title =  $(item).find('td').eq(1).find('a').attr('title');
                const pubDate = $(item).find('td').eq(3).text();
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
        title: '国家科技管理信息系统',
        link: url,
        description: '通知公告',
        item: out
           
    };
};

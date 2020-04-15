new Vue({
    el: '.content',
    data: {
        selectItem : 'Arashi',
        collect : [
            {
                name : 'Cherry',
                theme: 'card-header-rose',
                iconsHeader: 'local_bar',
                iconsFooter: 'filter_vintage',
                lists: {
                    '2/15' : [
                        {
                            subject: '儲值',
                            company: 'Jenny Pay',
                            type: 'icome',
                            amount : 500
                        },
                        {
                            subject: '可不可',
                            company: 'Uber Eats',
                            type: 'expense',
                            amount : 37
                        },
                        {
                            subject: '一日樂食',
                            company: 'Uber Eats',
                            type: 'expense',
                            amount : 162
                        }
                    ],
                    '2/20' : [
                        {
                            subject: '蜜桃巧茶那堤',
                            company: '星巴克',
                            type: 'expense',
                            amount : 75
                        }
                    ],
                    '2/26' : [
                        {
                            subject: '芝芝草莓果粒',
                            company: '麻古茶坊',
                            type: 'expense',
                            amount : 85
                        }
                    ],
                    '3/5' : [
                        {
                            subject: '綜合3',
                            company: '綠逗薏人',
                            type: 'expense',
                            amount : 65
                        }
                    ],
                    '3/18' : [
                        {
                            subject: '鴛鴦奶茶',
                            company: '不要對我尖叫',
                            type: 'expense',
                            amount : 80
                        }
                    ],
                    '4/9' : [
                        {
                            subject: '甘蔗青茶',
                            company: '黑白榨甘蔗鮮果汁',
                            type: 'expense',
                            amount : 50
                        }
                    ],
                    '4/10' : [
                        {
                            subject: '儲值',
                            company: 'Jenny Pay',
                            type: 'icome',
                            amount : 500
                        },
                        {
                            subject: '決明子紅茶',
                            company: '小日子商號',
                            type: 'expense',
                            amount : 25
                        }
                    ],
                    '4/15' : [
                        {
                            subject: '熱鐵觀音拿鐵',
                            company: '春水堂',
                            type: 'expense',
                            amount : 115
                        }
                    ]
                },
                coffee: {
                }
            },
            {
                name : '果子狸',
                theme: 'card-header-primary',
                iconsHeader: 'sports_kabaddi',
                iconsFooter: 'all_inclusive',
                lists : {
                    '2/15' : [
                        {
                            subject: '儲值',
                            company: 'Jenny Pay',
                            type: 'icome',
                            amount : 500
                        },
                        {
                            subject: '可不可',
                            company: 'Uber Eats',
                            type: 'expense',
                            amount : 37
                        },
                        {
                            subject: '一日樂食',
                            company: 'Uber Eats',
                            type: 'expense',
                            amount : 170
                        }
                    ],
                    '2/19' : [
                        {
                            subject: '咖啡逗',
                            company: 'deliveroo',
                            type: 'expense',
                            amount : 55
                        }
                    ],
                    '2/20' : [
                        {
                            subject: '幫蒸妮買早餐',
                            company: 'Jenny Pay',
                            type: 'icome',
                            amount : 30
                        },
                        {
                            subject: '熱美式',
                            company: '星巴克',
                            type: 'expense',
                            amount : 110
                        }
                    ],
                    '2/26' : [
                        {
                            subject: '四號電池',
                            company: 'Jenny Pay',
                            type: 'icome',
                            amount : 55
                        },
                        {
                            subject: '紅茶拿鐵',
                            company: '麻古茶坊',
                            type: 'expense',
                            amount : 81
                        }
                    ],
                    '3/5' : [
                        {
                            subject: '熱原味冰糖豆花+花生&芋園',
                            company: '綠逗薏人',
                            type: 'expense',
                            amount : 60
                        }
                    ],
                    '3/12' : [
                        {
                            subject: 'Tiamo Hokkaido Latte',
                            company: 'Jenny Pay',
                            type: 'income',
                            amount : 70
                        }
                    ],
                    '3/17' : [
                        {
                            subject: '炸雞軟骨',
                            company: '巧喰雞',
                            type: 'expense',
                            amount : 55
                        }
                    ],
                    '3/18' : [
                        {
                            subject: '玫瑰鮮奶茶',
                            company: '不要對我尖叫',
                            type: 'expense',
                            amount : 60
                        }
                    ],
                    '4/8' : [
                        {
                            subject: '儲值',
                            company: 'Jenny Pay',
                            type: 'icome',
                            amount : 275
                        }
                    ],
                    '4/10' : [
                        {
                            subject: '小日子鮮奶茶',
                            company: '小日子商號',
                            type: 'expense',
                            amount : 45
                        }
                    ],
                    '4/15' : [
                        {
                            subject: '熱珍珠奶茶',
                            company: '春水堂',
                            type: 'expense',
                            amount : 105
                        }
                    ]
                },
                coffee: {
                    '4/9' :{
                            subject: '寄杯',
                            type: 'icome',
                            amount: 200,
                            cup : 15
                    },
                    '4/14' :{
                            type: 'expense'
                    },
                    '4/15' :{
                            type: 'expense'
                    }
                }
            },
            {
                name : 'Elenore',
                theme: 'card-header-success',
                iconsHeader: 'wb_sunny',
                iconsFooter: 'emoji_nature',
                lists : {
                    '2/15' : [
                        {
                            subject: '儲值',
                            company: 'Jenny Pay',
                            type: 'icome',
                            amount : 255
                        },
                        {
                            subject: '可不可',
                            company: 'Uber Eats',
                            type: 'expense',
                            amount : 37
                        },
                        {
                            subject: '一日樂食',
                            company: 'Uber Eats',
                            type: 'expense',
                            amount : 170
                        }
                    ],
                    '2/19' : [
                        {
                            subject: '儲值',
                            company: 'Jenny Pay',
                            type: 'icome',
                            amount : 100
                        },
                        {
                            subject: '咖啡逗',
                            company: 'deliveroo',
                            type: 'expense',
                            amount : 50
                        }
                    ],
                    '3/5' : [
                        {
                            subject: '儲值',
                            company: 'Jenny Pay',
                            type: 'icome',
                            amount : 30
                        },
                        {
                            subject: '蒟蒻綠豆薏仁鮮奶',
                            company: '綠逗薏人',
                            type: 'expense',
                            amount : 60
                        }
                    ],
                    '3/17' : [
                        {
                            subject: '儲值',
                            company: 'Jenny Pay',
                            type: 'icome',
                            amount : 100
                        },
                        {
                            subject: '蜜汁碳烤雞排',
                            company: '巧喰雞',
                            type: 'expense',
                            amount : 75
                        }
                    ],
                    '3/18' : [
                        {
                            subject: '蜂蜜烏龍',
                            company: '不要對我尖叫',
                            type: 'expense',
                            amount : 40
                        }
                    ],
                    '4/9' : [
                        {
                            subject: '甘蔗牛奶',
                            company: '黑白榨甘蔗鮮果汁',
                            type: 'expense',
                            amount : 50
                        }
                    ],
                    '4/10' : [
                        {
                            subject: '儲值',
                            company: 'Jenny Pay',
                            type: 'icome',
                            amount : 100
                        },
                        {
                            subject: '黑糖鮮奶茶',
                            company: '小日子商號',
                            type: 'expense',
                            amount : 50
                        }
                    ],
                    '4/15' : [
                        {
                            subject: '冰觀音珍珠奶茶',
                            company: '春水堂',
                            type: 'expense',
                            amount : 95
                        }
                    ]
                },
                coffee: {
                }
            },
            {
                name : 'Arashi',
                theme: 'card-header-info',
                iconsHeader: 'local_cafe',
                iconsFooter: 'local_atm',
                lists : {},
                menu: {
                    '4/14' :{
                            bean: '三次手選 曼特寧 蘇門答臘 亞齊省',
                            proportion: 10
                    },
                    '4/15' :{
                            bean: '水洗 瓜地馬拉 基切省 睡美人莊園',
                            proportion: 15
                    }
                }
            }
        ],
        coffeeShop :{
            '3/9' : [
                {
                    bean: '水洗 瓜地馬拉 基切省 睡美人莊園',
                    path: 'guatemala-quiche-finca-la-perla',
                    price : 398
                },
                {
                    bean: '黃蜜處理 薩爾瓦多 庇里牛斯莊園 波旁種',
                    path: 'yellowhoney-salvador-bourbona',
                    price : 358
                },
                {
                    bean: '牧羊犬特調',
                    path: 'shepherd-blend',
                    price : 258
                },
                {
                    bean: '精選深焙單品豆 肯亞 SOE',
                    path: 'kenya-soe',
                    price : 169
                }
            ],
            '4/13' : [
                {
                    bean: '日曬 衣索比亞 G1 烏啦嘎 野櫻花（原價 598 元，48 折購入）',
                    path: 'ethiopia-uraga-sakura',
                    price : 299
                },
                {
                    bean: '日曬 衣索比亞 古吉 烏啦嘎鎮 莓吉村 G1',
                    path: 'ethiopia-tome-kebele',
                    price : 179
                },
                {
                    bean: '水洗 衣索比亞 耶加雪菲 G1',
                    path: 'ethiopia-yirgacheffe-g1',
                    price : 149
                },
                {
                    bean: '水洗 瓜地馬拉 安提瓜 花神 貝拉卡摩娜莊園 經典',
                    path: 'guatemala-antigua-bella-carmona-classic',
                    price : 149
                }
            ]
        }
    }
});

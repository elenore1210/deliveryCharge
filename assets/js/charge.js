new Vue({
    el: '.content',
    data: {
        collect : [
            {
                name : 'Cherry',
                subtitle : '',
                theme: 'card-header-rose',
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
                    ]
                }
            },
            {
                name : '果子狸',
                subtitle : '',
                theme: 'card-header-primary',
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
                    ]
                }
            },
            {
                name : 'Elenore',
                subtitle : '',
                theme: 'card-header-success',
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
                    ]
                }
            }
        ]
    }
});
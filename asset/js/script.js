const root = new Vue({
    el: '#root',
    data: {


        mess: '',
        now: dayjs().format('ddd MM MMMM YYYY HH:mm:ss'),
        // nowDue: dayjs().format('ddd MM MMMM YYYY'),
        risposte: ['andiamo al mare', 'cosa stai deicendo', 'siamo soli', 'hai fatto i compiti?', 'vorrei giocare con te'],





        user: {
            name: 'Arsenè',
            avatar: '_4',
        },






        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },

            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_io',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        activeUser: 0,




    },
    methods: {
        addClass(index) {
            //console.log('pos', index);
            this.activeUser = index;


        },

        addMess() {
            if (this.mess.length > 0) {
                this.puschMessage(this.mess, 'sent');
                this.mess = '';

                //console.log(this.mess);
                setTimeout(() => {
                    this.contacts[this.activeUser].messages.push({
                        date: dayjs().format('ddd MM MMMM YYYY HH:mm:ss'),
                        text: this.risposte,
                        status: 'received'
                    })
                }, 1000);

            }







        },
        puschMessage(text, status) {
            this.contacts[this.activeUser].messages.push({
                date: dayjs().format('ddd MM MMMM YYYY HH:mm:ss'),
                text: text,
                status: status

            });
        }




    },
    mounted() {
        //console.log('ciao ale');
        // setInterval(() => {
        //     this.now = dayjs().format('ddd MM MMMM YYYY HH:mm:ss');
        // }, 1000)
    }
});

//console.log(root);
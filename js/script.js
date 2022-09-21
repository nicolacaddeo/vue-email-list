console.log('Js Ok!');

const app = new Vue({
    el: '#root',
    data: {
        emails: []
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response);
                    const { data, status } = response;
                    if (status == 200) {
                        this.emails.push(data.response);
                    }
                })
                .catch((error) => {
                    console.log('Error');
                })


        }
    }
});
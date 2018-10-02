Vue.component('total-list-head', {
    template:
    '<div class="list-group-item"> ' +
    '<div class="container-fluid row">' +
    '   <div class="col-3 border-right">ФИО</div> ' +
    '   <div class="col-2 border-right">Телефон</div>' +
    '   <div class="col-1 border-right">Паспорт</div>' +
    '   <div class="col-1 border-right">Прибытие</div>' +
    '   <div class="col-1 border-right">Отбытие</div>' +
    '   <div class="col-4">Оплата</div>' +
    '</div>' +
    '</div>'
});

Vue.component('total-list-row', {
    props: ['client'],
    template:
    '<div class="list-group-item"> ' +
    '<div class="container-fluid row">' +
    '   <div class="col-3 border-right">{{client.fio}}</div> ' +
    '   <div class="col-2 border-right">{{client.phoneNumber}}</div>' +
    '   <div class="col-1 border-right">{{client.passportNumber}}</div>' +
    '   <div class="col-1 border-right">{{client.arrivalDate}}</div>' +
    '   <div class="col-1 border-right">{{client.departureDate}}</div>' +
    '   <div class="col-4">{{client.payment}}</div>' +
    '</div>' +
    '</div>'
});

Vue.component('total-list', {
    props: ['clients'],
    template:
    '<div class="list-group">' +
    '   <total-list-head/>' +
    '   <total-list-row v-for="client in clients" :key="client.id" :client="client" :name="client.id"></total-list-row>' +
    '</div>'
});

Vue.component('departure-list-head', {
    template:
    '<div class="list-group-item">' +
    '<div class="container-fluid row"> ' +
    '   <div class="col-1 border-right"></div> ' +
    '   <div class="col-1 border-right">ID</div> ' +
    '   <div class="col-2 border-right">Отправление</div>' +
    '</div>' +
    '</div>'
});

Vue.component('departure-list-row', {
    props: ['departure'],
    template:
    '<div class="list-group-item">' +
    '<div class="container-fluid row"> ' +
    '   <div class="col-1 border-right"></div> ' +
    '   <div class="col-1 border-right">{{departure.id}}</div> ' +
    '   <div class="col-2 ">{{departure.date}}</div>' +
    '</div>' +
    '</div>'
});

Vue.component('departure-list', {
    props: ['departureDates'],
    template:
    '<div class="list-group">' +
    '   <departure-list-head/>' +
    '   <departure-list-row v-for="departure in departureDates" :key="departure.id" :departure="departure" :name="departure.id"></departure-list-row>' +
    '</div>'
});

Vue.component('navbar', {
    props: ['getData', 'setApi'],
    template:
    '<nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">' +
    '    <a class="navbar-brand" href="#">Лабораторная 7</a>' +
    '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"' +
    '            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
    '        <span class="navbar-toggler-icon"></span>' +
    '    </button>' +
    '    <div class="collapse navbar-collapse" id="navbarSupportedContent">' +
    '        <ul class="navbar-nav mr-auto">' +
    '            <li class="nav-item">' +
    '               <input class="nav-link w-100" type="button" @click="setTotal" value="Общая"/>' +
    '            </li>' +
    '            <li class="nav-item">' +
    '                <a class="nav-link" href="#">Клиенты</a>' +
    '            </li>' +
    '            <li class="nav-item w-100">' +
    '                <input class="nav-link w-100" type="button" @click="setDeparture" value="Дата отправления"/>' +
    '            </li>' +
    '            <li class="nav-item">' +
    '                <a class="nav-link" href="#">Платежи</a>' +
    '            </li>' +
    '        </ul>' +
    '        <form class="form-inline my-2 my-lg-0">' +
    '            <input class="form-control mr-sm-2" placeholder="Фильтр">' +
    '            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Фильтр</button>' +
    '        </form>' +
    '    </div>' +
    '</nav>',
    methods: {
        setTotal: function () {
            this.setApi('total');
            this.getData();
        },
        setDeparture: function () {
            this.setApi('departure');
            this.getData();
        },
        setPayment: function () {
            this.setApi('payment');
            this.getData();
        }
    }
});


Vue.component('lists', {
    data: function () {
        return {
            arr: [],
            api: ''
        }
    },
    template:
    '<div>' +
    '<navbar :getData="getData" :setApi="setApi"/>' +
    '<total-list v-if="api === \'total\'" :clients="arr"/>' +
    '<departure-list v-else-if="api === \'departure\'" :departureDates="arr"/>' +
    '</div>',
    methods: {
        setApi: function (_api) {
            this.api = _api;
        },
        getData: function () {
            if (this.api === '') {
                this.api = 'departure';
            }
            this.arr = [];
            let clientApi = Vue.resource(this.api);
            clientApi.get().then(
                result => {
                    result.json().then(
                        objects => {
                            objects.forEach(
                                object => {
                                    console.log(object);
                                    this.arr.push(object)
                                }
                            )
                        })
                }
            );
        }
    },
    created: function () {
        this.getData()
    }
});

/*Vue.component('navigation', {
    template:
    '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
    '  <a class="navbar-brand" href="#">Лабораторная 7</a>' +
    '  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
    '    <span class="navbar-toggler-icon"></span>' +
    '  </button>' +
    '  <div class="collapse navbar-collapse" id="navbarSupportedContent">' +
    '    <ul class="navbar-nav mr-auto">' +
    '      <li class="nav-item">' +
    '        <a class="nav-link" >Общая</a>' +
    '      </li>' +
    '      <li class="nav-item">' +
    '        <a class="nav-link" href="#">Клиенты</a>' +
    '      </li>' +
    '      <li class="nav-item">' +
    '        <a class="nav-link" v-on:click="setDeparture">Дата отправления</a>' +
    '      </li>' +
    '      <li class="nav-item">' +
    '        <a class="nav-link" href="#">Платежи</a>' +
    '      </li>' +
    '    </ul>' +
    '    <form class="form-inline my-2 my-lg-0">' +
    '      <input class="form-control mr-sm-2" placeholder="Фильтр">' +
    '      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Фильтр</button>' +
    '    </form>' +
    '  </div>' +
    '</nav>'
});*/


const list = new Vue({
    el: '#list',
    template:
        '<lists/>'
});

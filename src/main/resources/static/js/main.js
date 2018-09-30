var clientApi = Vue.resource('/total');

Vue.component('client-list-head', {
    template:
    '<div class="list-group-item"> ' +
    '<div class="container-fluid row">' +
    '   <div class="col-3">ФИО</div> ' +
    '   <div class="col-2">Телефон</div>' +
    '   <div class="col-1">Паспорт</div>' +
    '   <div class="col-2">Прибытие</div>' +
    '   <div class="col-1">Отбытие</div>' +
    '   <div class="col-3">Оплата</div>' +
    '</div>' +
    '</div>'
});

Vue.component('client-list-row', {
    props: ['client'],
    template:
    '<div class="list-group-item"> ' +
    '<div class="container-fluid row">' +
    '   <div class="col-3">{{client.fio}}</div> ' +
    '   <div class="col-2">{{client.phoneNumber}}</div>' +
    '   <div class="col-1">{{client.passportNumber}}</div>' +
    '   <div class="col-2">{{client.arrivalDate}}</div>' +
    '   <div class="col-1">{{client.departureDate}}</div>' +
    '   <div class="col-3">{{client.payment}}</div>' +
    '</div>' +
    '</div>'
});

Vue.component('client-list', {
    props: ['clients'],
    template:
    '<div class="list-group">' +
    '   <client-list-head></client-list-head>' +
    '   <client-list-row v-for="client in clients" :key="client.id" :client="client" :name="client.id"></client-list-row>' +
    '</div>'
});

var list = new Vue({
    data: {
        arr: []
    },
    el: '#list',
    created:
        function () {
            clientApi.get().then(
                result => result.json().then(
                    clients => clients.forEach(
                        client => this.arr.push(client)
                    )
                )
            )
        },
    template: '<client-list class="mt-3" :clients="arr"/>'
});

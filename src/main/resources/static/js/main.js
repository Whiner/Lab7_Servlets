Vue.component('row-settings', {
    props: ['editMethod', 'delMethod', 'object'],
    template:
    '<div class="container-fluid row">' +
    '    <div class="col-6" >' +
    '        <a href="#" v-if="editMethod">' +
    '            <img style="width: 25px" src="../images/edit.png" @click="editMethod(object)"/>' +
    '        </a>' +
    '    </div>' +
    '    <div class="col-6"> ' +
    '        <a href="#"  v-if="delMethod">' +
    '            <img style="width: 25px" src="../images/delete.png"  @click="delMethod(object)"/>' +
    '        </a>' +
    '    </div>' +
    '</div>'
});

Vue.component('total-list-head', {
    template:
    '<div class="list-group-item"> ' +
    '<div class="container-fluid row">' +
    '   <div class="col-3 border-right">ФИО</div> ' +
    '   <div class="col-2 border-right">Телефон</div>' +
    '   <div class="col-1 border-right">Паспорт</div>' +
    '   <div class="col-1 border-right">Прибытие</div>' +
    '   <div class="col-1 border-right">Отбытие</div>' +
    '   <div class="col-3 border-right">Оплата</div>' +
    '</div>' +
    '</div>'
});

Vue.component('total-list-row', {
    props: ['client', 'editMethod', 'delMethod'],
    template:
    '<div class="list-group-item"> ' +
    '<div class="container-fluid row">' +
    '   <div class="col-3 border-right">{{client.fio}}</div> ' +
    '   <div class="col-2 border-right">{{client.phoneNumber}}</div>' +
    '   <div class="col-1 border-right">{{client.passportNumber}}</div>' +
    '   <div class="col-1 border-right">{{client.arrivalDate}}</div>' +
    '   <div class="col-1 border-right">{{client.departureDate}}</div>' +
    '   <div class="col-3 border-right">Оплачено {{client.payment.date}} через {{client.payment.form}}</div>' +
    '   <div class="col-1">' +
    '       <row-settings :editMethod="editMethod" :delMethod="delMethod" :object="client"></row-settings>' +
    '   </div>' +
    '</div>' +
    '</div>'
});

Vue.component('total-list', {
    props: ['clients', 'editMethod', 'delMethod'],
    template:
    '<div class="list-group">' +
    '   <total-list-head/>' +
    '   <total-list-row v-for="client in clients" :key="client.id" :client="client" :name="client.id"' +
    '       :editMethod="editMethod" :delMethod="delMethod"></total-list-row>' +
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
    props: ['departure', 'editMethod', 'delMethod'],
    template:
    '<div class="list-group-item">' +
    '<div class="container-fluid row"> ' +
    '   <div class="col-1 border-right"></div> ' +
    '   <div class="col-1 border-right">{{departure.id}}</div> ' +
    '   <div class="col-2 border-right">{{departure.date}}</div>' +
    '   <div class="col-1">' +
    '       <row-settings :editMethod="editMethod" :delMethod="delMethod" :object="departure"></row-settings>' +
    '   </div>' +
    '</div>' +
    '</div>'
});

Vue.component('departure-list', {
    props: ['departureDates', 'editMethod', 'delMethod'],
    template:
    '<div class="list-group">' +
    '   <departure-list-head/>' +
    '   <departure-list-row v-for="departure in departureDates" :key="departure.id" :departure="departure" ' +
    ':name="departure.id" :editMethod="editMethod" :delMethod="delMethod"></departure-list-row>' +
    '</div>'
});

Vue.component('payment-list-head', {
    template:
    '<div class="list-group-item">' +
    '<div class="container-fluid row"> ' +
    '   <div class="col-1 border-right"></div> ' +
    '   <div class="col-1 border-right">ID</div> ' +
    '   <div class="col-2 border-right">Дата оплаты</div>' +
    '   <div class="col-2 border-right">Способ оплаты</div>' +
    '   <div class="col-5 border-right">Заметка</div>' +
    '</div>' +
    '</div>'
});

Vue.component('payment-list-row', {
    props: ['payment', 'editMethod', 'delMethod'],
    template:
    '<div class="list-group-item">' +
    '<div class="container-fluid row"> ' +
    '   <div class="col-1 border-right"></div> ' +
    '   <div class="col-1 border-right">{{payment.id}}</div> ' +
    '   <div class="col-2 border-right">{{payment.date}}</div>' +
    '   <div class="col-2 border-right">{{payment.form}}</div>' +
    '   <div class="col-5 border-right">{{payment.note}}</div>' +
    '   <div class="col-1">' +
    '       <row-settings :editMethod="editMethod" :delMethod="delMethod" :object="payment"></row-settings>' +
    '   </div>' +
    '</div>' +
    '</div>'
});

Vue.component('payment-list', {
    props: ['payments', 'editMethod', 'delMethod'],
    template:
    '<div class="list-group">' +
    '   <payment-list-head/>' +
    '   <payment-list-row v-for="payment in payments" :key="payment.id" :payment="payment" ' +
    ':name="payment.id" :editMethod="editMethod" :delMethod="delMethod"></payment-list-row>' +
    '</div>'
});

Vue.component('navbar', {
    props: ['getData', 'setApi'],
    template:
    '<nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">' +
    '    <a class="navbar-brand">Лабораторная 7</a>' +
    '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"' +
    '            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
    '        <span class="navbar-toggler-icon"></span>' +
    '    </button>' +
    '    <div class="collapse navbar-collapse" id="navbarSupportedContent">' +
    '        <ul class="navbar-nav mr-auto">' +
    '            <li class="nav-item w-100">' +
    '               <input class="btn btn-light" type="button" @click="setTotal" value="Общая"/>' +
    '            </li>' +
    '            <li class="nav-item w-100">' +
    '                <input class="btn btn-light" type="button" @click="setDeparture" value="Дата отправления"/>' +
    '            </li>' +
    '            <li class="nav-item w-100">' +
    '                <input class="btn btn-light" type="button" @click="setPayment" value="Платежи"/>' +
    '            </li>' +
    '            <li class="nav-item w-100">' +
    '                <input class="btn btn-light" type="button" value="Добавить запись"/>' +
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

Vue.component('edit-form', {
    props: ['client'],
    data: function () {
        return {
            fio: '',
            passport: '',
            tel: '',
            arrDate: '',
            depDate: '',
            payForm: '',
            payDate: '',
            note: '',
            clientApi: null
        };
    },
    watch: {
        client: function (val) {
            console.log(val);
            this.fillClient();
        }
    },
    template:
    '<form class="container w-50 mx-auto mt-4 mb-5">' +
    '<div class="row">' +
    '<div class="form-group col-6">' +
    '    <label for="exampleFormControlInput1">ФИО клиента</label>' +
    '    <input v-model="fio" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Фамилия Имя Отчество">' +
    ' </div>' +
    ' <div class="form-group col-6">' +
    '    <label for="exampleFormControlInput2">Паспорт</label>' +
    '    <input v-model="passport" type="text" class="form-control" id="exampleFormControlInput2" placeholder="ВТ******">' +
    '</div> ' +
    '</div>' +
    '<div class="row">' +
    '<div class="col-6 form-group">' +
    '    <label for="exampleFormControlInput3">Номер телефона</label>' +
    '    <input v-model="tel" type="tel" class="form-control" id="exampleFormControlInput3" placeholder="+38-071-*******">' +
    ' </div>' +
    '<div class="col-6 form-group ">' +
    '    <label for="exampleFormControlInput4">Дата прибытия</label>' +
    '    <input v-model="arrDate" type="date" class="form-control" id="exampleFormControlInput4">' +
    '</div>' +
    '</div> ' +
    '<div class="row">' +
    '<div class="col-6 form-group">' +
    '    <label for="exampleFormControlInput5">Дата отъезда</label>' +
    '    <input v-model="depDate" type="date" class="form-control" id="exampleFormControlInput5">' +
    '</div>' +
    '<div class="col-6 form-group">' +
    '    <label for="exampleFormControlInput6">Форма платежа</label>' +
    '    <input v-model="payForm" type="text" class="form-control" id="exampleFormControlInput6">' +
    '</div>' +
    '</div>' +
    '<div class="row">' +
    '<div class="col-6 form-group w-25">' +
    '    <label for="exampleFormControlInput7">Дата платежа</label>' +
    '    <input v-model="payDate" type="date" class="form-control" id="exampleFormControlInput7">' +
    '</div>' +
    '</div>' +
    '<div class="row">' +
    '<div class="col-12 form-group">' +
    '    <label for="exampleFormControlInput8">Заметка</label>' +
    '    <textarea v-model="note" class="form-control" id="exampleFormControlInput8" placeholder="(Не обязательно)"/>' +
    '</div>' +
    '</div>' +
    '<div>' +
    '    <input class="btn btn-outline-dark mx-auto" @click="save" type="button" value="Сохранить">' +
    '</div>' +
    '</form>',
    methods: {
        fillClient: function () {
            console.log("Зашло");
            if (this.clientApi === null) {
                this.clientApi = Vue.resource('total');
            }
            if (!this.client) {
                this.save();

            } else {
                this.fio = this.client.fio;
                this.passport = this.client.passportNumber;
                this.tel = this.client.phoneNumber;
                this.arrDate = this.client.arrivalDate;
                this.depDate = this.client.departureDate;
                this.payForm = this.client.payment.form;
                this.payDate = this.client.payment.date;
                this.note = this.client.payment.note;
            }
        },
        save: function () {
            let new_client = {
                fio: this.fio,
                phoneNumber: this.tel,
                passportNumber: this.passport,
                arrivalDate: this.arrDate,
                departureDate: this.depDate,
                payNote: this.note,
                payDate: this.payDate,
                payForm: this.payForm


            };
            this.clientApi.save({}, new_client).then(result => {
                if (result.ok) {
                    console.log("Успешно");
                }
                console.log(result.json());
            })
        }
    }
});

const form = new Vue({
    el: '#add',
    data: {
        client: null
    },
    template:
        '<edit-form :client="client"/>'
});

Vue.component('lists', {
    data: function () {
        return {
            arr: [],
            api: '',
            clientApi: null
        }
    },
    template:
    '<div>' +
    '<navbar :getData="getData" :setApi="setApi"/>' +
    '<total-list v-if="api === \'total\'" :clients="arr" :editMethod="edit" :delMethod="del"/>' +
    '<departure-list v-else-if="api === \'departure\'" :departureDates="arr" :editMethod="edit" :delMethod="del"/>' +
    '<payment-list v-else-if="api === \'payment\'" :payments="arr" :editMethod="edit" :delMethod="del"/>' +
    '</div>',
    methods: {
        setApi: function (_api) {
            this.api = _api;
        },
        getData: function () {
            if (this.api === '') {
                this.api = 'total';
            }
            this.arr = [];
            this.clientApi = Vue.resource(this.api);
            console.log(this.api);
            this.clientApi.get().then(
                result => {
                    result.json().then(
                        objects => {
                            objects.forEach(
                                object => {
                                    this.arr.push(object)
                                }
                            )
                        })
                }
            );
        },
        del: function (object) {
            this.clientApi.delete(this.api, {id: object.id}).then(
                result => {
                    if (result.ok) {
                        this.arr.splice(this.arr.indexOf(object), 1);
                    }
                }
            )
        },
        edit: function (object) {
            form.client = object;
        }
    },
    created: function () {
        this.getData()
    }
});

const list = new Vue({
    el: '#list',
    template:
        '<lists/>'
});


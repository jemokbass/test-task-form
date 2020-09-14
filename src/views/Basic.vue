<template>
  <form class="form-basic form" @submit.prevent="submitHandler">
    <h2 class="form-basic__head head-title">Заполните основные данные</h2>
    <div class="form-basic__inner">
      <div class="form-basic__column">
        <label class="label form-basic__text">
          <span class="form-basic__title form-basic__title--input">Фамилия*</span>
          <input
            v-model.trim="lastName"
            :class="{invalid: ($v.lastName.$dirty&&!$v.lastName.required)||(!$v.lastName.minLength), valid:($v.lastName.$dirty&&$v.lastName.required)||($v.lastName.$dirty&&$v.lastName.minLength) }"
            @focus="isClick"
            @blur="notClick"
            class="input input-text"
            type="text"
          />
          <small v-if="$v.lastName.$dirty&&!$v.lastName.required" class="invalid">Поле пустое</small>
          <small
            v-else-if="!$v.lastName.minLength"
            class="invalid"
          >Слишком короткая фамилия. Сейчас {{lastName.length}}</small>
        </label>
        <label class="label form-basic__text">
          <span class="form-basic__title form-basic__title--input">Имя*</span>
          <input
            v-model.trim="firstName"
            :class="{invalid: ($v.firstName.$dirty&&!$v.firstName.required)||(!$v.firstName.minLength), valid:($v.firstName.$dirty&&$v.firstName.required)||($v.firstName.$dirty&&$v.firstName.minLength) }"
            @focus="isClick"
            @blur="notClick"
            class="input input-text"
            type="text"
          />
          <small v-if="$v.firstName.$dirty&&!$v.firstName.required" class="invalid">Поле пустое</small>
          <small v-else-if="!$v.firstName.minLength" class="invalid">Слишком короткое имя.</small>
        </label>
        <label class="label form-basic__text">
          <span class="form-basic__title form-basic__title--input">Отчество</span>
          <input
            @focus="isClick"
            @blur="notClick"
            class="input input-text"
            type="text"
            v-model.trim="fatherName"
          />
        </label>
        <label class="label form-basic__number">
          <span class="form-basic__title form-basic__title--input">Дата рождения*</span>
          <input
            v-model="birthday"
            :class="{invalid: ($v.birthday.$dirty&&!$v.birthday.required)||(!$v.birthday.minLength), valid:($v.birthday.$dirty&&$v.birthday.required||($v.birthday.$dirty&&$v.birthday.minLength)) }"
            @focus="isClick"
            @blur="notClick"
            class="input input-number"
            type="text"
            maxlength="10"
          />
          <small v-if="$v.birthday.$dirty&&!$v.birthday.required" class="invalid">Поле пустое</small>
          <small v-else-if="!$v.birthday.minLength" class="invalid">Слишком короткая дата рождения</small>
        </label>
      </div>
      <div class="form-basic__column">
        <label class="label form-basic__number">
          <span class="form-basic__title form-basic__title--input">Номер телефона*</span>
          <input
            v-model="tel"
            :class="{invalid: ($v.tel.$dirty&&!$v.tel.required)||(!$v.tel.minLength), valid:($v.tel.$dirty&&$v.tel.required)||($v.tel.$dirty&&$v.tel.minLength) }"
            @focus="isClick"
            @blur="notClick"
            class="input input-number"
            type="tel"
            name="form[tel]"
            maxlength="16"
          />
          <small v-if="$v.tel.$dirty&&!$v.tel.required" class="invalid">Поле пустое</small>
          <small v-else-if="!$v.tel.minLength" class="invalid">Слишком короткий номер телефона</small>
        </label>
        <label class="label form-basic__text">
          <span class="form-basic__title form-basic__title--input">Пол</span>
          <input
            @focus="isClick"
            @blur="notClick"
            class="input input-text"
            type="text"
            v-model="gender"
          />
        </label>
        <label class="label form-basic__select">
          <span class="form-basic__title">Группа клиентов*</span>
          <div class="select-inner">
            <select
              multiple
              v-model="group"
              :class="{invalid: ($v.group.$dirty&&!$v.group.required), valid:$v.group.$dirty&&$v.group.required }"
              class="select select-multi"
            >
              <option value="VIP">VIP</option>
              <option value="Problem">Проблемные</option>
              <option value="OMC">ОМС</option>
            </select>
            <span class="focus"></span>
          </div>
          <small v-if="$v.group.$dirty&&!$v.group.required" class="invalid">Поле пустое</small>
        </label>
        <label class="label form-basic__select">
          <span class="form-basic__title">Лечащий врач</span>
          <div class="select-inner select-inner--sec">
            <select class="select" v-model="doctor">
              <option value>Любой</option>
              <option value="Ivanov">Иванов</option>
              <option value="Zakcharov">Захаров</option>
              <option value="Chernischeva">Чернышева</option>
            </select>
            <span class="focus"></span>
          </div>
        </label>
        <label class="label form-basic__checkbox">
          <span class="form-basic__title">Не отправлять смс</span>
          <input class="checkbox" type="checkbox" v-model="sms" />
        </label>
      </div>
    </div>
    <div class="form-basic__next">
      <button class="button" type="submit">&#10148;</button>
    </div>
  </form>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "Basic",
  data: () => ({
    lastName: "",
    firstName: "",
    birthday: "",
    tel: "",
    group: [""],
    fatherName: "",
    gender: "",
    doctor: "",
    sms: "",
  }),
  watch: {
    tel() {
      this.tel = this.tel
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{1})?(\d{3})?(\d{3})?(\d{4})?/g, "$1 ($2) $3-$4");
    },
    lastName() {
      this.lastName = this.lastName.replace(/[^A-Z,a-z,а-я,А-я,-]/g, "");
    },
    firstName() {
      this.firstName = this.firstName.replace(/[^A-Z,a-z,а-я,А-я,-]/g, "");
    },
    fatherName() {
      this.fatherName = this.fatherName.replace(/[^A-Z,a-z,а-я,А-я,-]/g, "");
    },
    gender() {
      this.gender = this.gender.replace(/[^A-Z,a-z,а-я,А-я,-]/g, "");
    },
    birthday() {
      this.birthday = this.birthday
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{2})?(\d{2})?(\d{4})?/g, "$1.$2.$3");
    },
  },
  validations: {
    lastName: { required, minLength: minLength(3) },
    firstName: { required, minLength: minLength(2) },
    birthday: { required, minLength: minLength(6) },
    tel: {
      required,
      minLength: minLength(16),
    },
    group: { required },
  },
  methods: {
    isClick: (e) => {
      function act() {
        e.target.previousSibling.classList.add("active");
      }
      act();
      if (act()) {
        !act();
      }
      if (e.target.value !== "") {
        !act();
      }
    },
    notClick: (e) => {
      function notAct() {
        e.target.previousSibling.classList.remove("active");
      }
      if (e.target.value === "") {
        notAct();
      } else {
        return false;
      }
    },
    submitHandler() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      const formData = {
        lastName: this.lastName,
        firstName: this.firstName,
        birthday: this.birthday,
        tel: this.tel,
        group: this.group,
        fatherName: this.fatherName,
        gender: this.gender,
        doctor: this.doctor,
        sms: this.sms,
      };
      this.$router.push("/adress");
      console.log(formData);
    },
  },
};
</script>

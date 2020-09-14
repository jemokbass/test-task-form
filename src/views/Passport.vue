<template>
  <form class="form-passport form" @submit.prevent="submitHandlerPassport">
    <h2 class="form-passport__head head-title">Документ удостоверяющий личность</h2>
    <label class="label form-passport__select">
      <span class="form-passport__title">Тип документа*</span>
      <div class="select-inner">
        <select
          v-model="typeDocument"
          :class="{invalid: ($v.typeDocument.$dirty&&!$v.typeDocument.required), valid:$v.typeDocument.required }"
          class="select"
        >
          <option value></option>
          <option value="passport">Паспорт</option>
          <option value="born">Свидетельство о рождении</option>
          <option value="driver">Водительское удостоверение</option>
        </select>
        <span class="focus"></span>
      </div>
      <small v-if="$v.typeDocument.$dirty&&!$v.typeDocument.required" class="invalid">Поле пустое</small>
    </label>
    <label class="label form-passport__label">
      <span class="form-passport__title">Серия</span>
      <input v-model="series" class="input" type="text" maxlength="7" />
    </label>
    <label class="label form-passport__label">
      <span class="form-passport__title">Номер</span>
      <input v-model="numberPassport" class="input" type="text" maxlength="6" />
    </label>
    <label class="label form-passport__label">
      <span class="form-passport__title">Кем выдан</span>
      <input v-model="whoIssue" class="input" type="text" />
    </label>
    <label class="label form-passport__label">
      <span class="form-passport__title">Дата выдачи*</span>
      <input
        v-model="dateIssue"
        class="input"
        type="text"
        :class="{invalid: ($v.dateIssue.$dirty&&!$v.dateIssue.required)||($v.dateIssue.$dirty&&!$v.dateIssue.minLength), valid:($v.dateIssue.$dirty&&$v.dateIssue.required&&$v.dateIssue.minLength) }"
        maxlength="10"
      />
      <small
        v-if="$v.dateIssue.$dirty&&!$v.dateIssue.required"
        class="invalid"
      >Поле "дата выдачи" должно быть заполнено</small>
      <small
        v-else-if="$v.dateIssue.$dirty&&!$v.dateIssue.minLength"
        class="invalid"
      >Слишком короткая дата</small>
    </label>
    <div class="form-passport__next">
      <button class="button" type="submit">&#10148;</button>
    </div>
  </form>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "Passport",
  data: () => ({
    typeDocument: "",
    series: "",
    numberPassport: "",
    whoIssue: "",
    dateIssue: "",
  }),
  validations: {
    typeDocument: { required },
    dateIssue: { required, minLength: minLength(8) },
  },
  watch: {
    series() {
      this.series = this.series
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{2})?(\d{2})?/g, "$1 - $2");
    },
    numberPassport() {
      this.numberPassport = this.numberPassport
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{6})?/g, "$1");
    },
    dateIssue() {
      this.dateIssue = this.dateIssue
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{2})?(\d{2})?(\d{4})?/g, "$1.$2.$3");
    },
  },
  methods: {
    submitHandlerPassport() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      const formDataPassport = {
        typeDocument: this.typeDocument,
        series: this.series,
        numberPassport: this.numberPassport,
        whoIssue: this.whoIssue,
        dateIssue: this.dateIssue,
      };
      const el = document.querySelector(".form-passport");
      el.insertAdjacentHTML(
        "afterBegin",
        '<div class="modal"><h3>Успешно</h3></div>'
      );
      el;
      setTimeout(() => {
        this.$router.push("/");
        console.log(formDataPassport);
      }, 2200);
    },
  },
};
</script>

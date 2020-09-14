<template>
  <form class="form-adress form" @submit.prevent="submitHandlerAdress">
    <h2 class="form-adress__head head-title">Введите адрес</h2>
    <label class="label form-adress__label">
      <span class="form-adress__title">Индекс</span>
      <input v-model="index" class="input" type="text" maxlength="9" />
    </label>
    <label class="label form-adress__label">
      <span class="form-adress__title">Страна</span>
      <input v-model="country" class="input" type="text" />
    </label>
    <label class="label form-adress__label">
      <span class="form-adress__title">Область</span>
      <input v-model="region" class="input" type="text" />
    </label>
    <label class="label form-adress__label">
      <span class="form-adress__title">Город*</span>
      <input
        v-model="city"
        class="input"
        type="text"
        :class="{invalid: ($v.city.$dirty&&!$v.city.required), valid:$v.city.required }"
      />
      <small
        v-if="$v.city.$dirty&&!$v.city.required"
        class="invalid"
      >Поле город должно быть заполнено</small>
    </label>
    <label class="label form-adress__label">
      <span class="form-adress__title">Улица</span>
      <input v-model="street" class="input" type="text" />
    </label>
    <label class="label form-adress__label">
      <span class="form-adress__title">Дом</span>
      <input v-model="house" class="input" type="text" maxlength="5" />
    </label>
    <div class="form-adress__next">
      <button class="button" type="submit">&#10148;</button>
    </div>
  </form>
</template>
<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "Adress",
  data: () => ({
    index: "",
    country: "",
    region: "",
    city: "",
    street: "",
    house: "",
  }),
  validations: {
    city: { required },
  },
  watch: {
    index() {
      this.index = this.index
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{3})?(\d{3})?/g, "$1 - $2");
    },
    house() {
      this.house = this.house
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{5})?/g, "$1");
    },
  },
  methods: {
    submitHandlerAdress() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      const formDataAdress = {
        index: this.index,
        country: this.country,
        region: this.region,
        city: this.city,
        street: this.street,
        house: this.house,
      };
      this.$router.push("/passport");
      console.log(formDataAdress);
    },
  },
};
</script>

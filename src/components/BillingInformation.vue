<template>
  <v-form>
    <v-container>
      <v-col
          class="mb-5"
          cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Billing Information
        </h2>
      </v-col>
    </v-container>
    <v-container>
      <v-row no-gutters>
        <v-col>
          <v-text-field
            v-model="formData.billingFN"
            label="Billing Contact First Name"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="formData.billingLN"
            label="Billing Contact Last Name"
            @change="update"
            filled
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="formData.telNum"
            label="Tel Number"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="formData.faxNum"
            label="Fax Number"
            @change="update"
            filled
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="formData.email"
            label="Email"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col md="6">
          <v-text-field
            v-model="formData.billingAddress"
            label="Billing Address"
            @change="update"
            filled
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="formData.billingCity"
            label="City"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="formData.billingStateProv"
            label="State/Province"
            @change="update"
            filled
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="formData.billingZip"
            label="Zip/Postal Code"
            @change="update"
            filled
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "BillingInformation",
  props:["billingInformationData"],
  data: () => ({
    formData: {
      billingFN: null,
      billingLN: null,
      telNum: null,
      faxNum: null,
      email: null,
      billingAddress: null,
      billingCity: null,
      billingStateProv: null,
      billingZip: null,
    }
  }),

  methods: {
    update() {
      this.$emit("updateBillingInformation",this.$data.formData)
    }
  },
}
</script>

<style scoped>

</style>
<template>
  <v-form>
    <v-container>
      <v-row no-gutters>
        <v-col>
          <v-text-field
            v-model="billingFN"
            label="Billing Contact First Name"
            filled
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="billingLN"
            label="Billing Contact Last Name"
            filled
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="telNum"
            label="Tel Number"
            filled
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="faxNum"
            label="Fax Number"
            filled
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="email"
            label="Email"
            filled
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col md="6">
          <v-text-field
            v-model="billingAddress"
            label="Billing Address"
            filled
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="billingCity"
            label="City"
            filled
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="billingStateProv"
            label="State/Province"
            filled
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="billingZip"
            label="Zip/Postal Code"
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
  name: "BillingInformation"
}
</script>

<style scoped>

</style>
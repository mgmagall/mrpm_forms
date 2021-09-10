<template>
  <v-form>
    <v-row>
      <v-col>
        <p class="font-weight-bold heading text-left">Genotyping</p>
      </v-col>

    </v-row>
    <v-divider color="black"></v-divider>
  <v-container fluid>
    <v-row>
      <p>Pups will be sampled 10-15 days after birth. Please indicate if you would like:</p>
    </v-row>
    <v-radio-group v-model="formData.rederivationGenoLocation">
      <v-radio
          :value="MBP"
      >
        <template v-slot:label>
          <div>Genotyping performed at the MBP. Please email genotyping protocol to <a href="mailto: mbp@ucdavis.edu" target="_blank">mbp@ucdavis.edu</a></div>
        </template>
      </v-radio>
      <v-radio
          :value="customersFacility"
          :label="'Genotyping performed at customer\'s facility.'"
      ></v-radio>
    </v-radio-group>
  </v-container>

  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <p class="text-left">
          For UCD PI's, samples will be available for pick at the MBP.<br>
          Address: 2795 2nd St Suite 400, Davis CA 95618<br>
          Hours: Mon-Fri 8:00am to 5:00pm
        </p>
      </v-col>
      <v-col cols="6">
        <v-text-field
            v-model="formData.fedExAcct"
            label="FedEx Account #:"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <p class="text-left">
          For non-UCD PI's, please provide shipping information and send us your FedEx account information.
          We require to have this information prior to shipping mouse tissue.
        </p>
      </v-col>
      <v-col cols="6">
        <v-text-field
            v-model="formData.nonUCDPIsShippingAddress"
            label="Shipping Address:"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
  </v-form>
</template>

<script>
export default {
  name: "genotypingSection_MICLForm",

  data: () =>({
    formData: {
      rederivationGenoLocation: null,
      fedExAcct: null,
      nonUCDPIsShippingAddress: null
    }
  }),

  methods:{
    update() {
      this.$emit("updateGenoSection_miclFormData",this.$data.formData)
    }
  },
}
</script>

<style scoped>

</style>
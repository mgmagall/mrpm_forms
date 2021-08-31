<template>
  <v-form>
    <v-container>
      <v-col
          class="mb-5"
          cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Kit Request Form
        </h2>
        <h3 class="font-weight-medium">
          Please be aware that it takes at least 1-2 weeks from the time a request and payment information is received
          to a kit(s) being shipped. A formal estimate will be provided after the completed form is received.<br>
          Kits are typically shipped on dry ice.
        </h3>

      </v-col>
      <v-row>
        <v-col md="4">
          <v-checkbox
              v-model="formData.mouseIVFKit"
              :label="'Mouse IVF Kit'"
          ></v-checkbox>
        </v-col>
        <v-col md="4">
          <v-text-field
              v-model="formData.ivfKitQuantity"
              label="Quantity"
              solo
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="8">
          <p class="text-left">
            1 IVF kit is enough for two IVF procedures. See
            <a
                href="https://projects.mousebiology.org/documents/1618420129.pdf"
                target="_blank"
            >IVF Kit Protocol <br></a>
          </p>
          <p class="text-left">
            IVF kit should be stored at -20°C or -80°C and used within 3 months of receipt; once thawed it is good for
            two weeks if kept refrigerated.
          </p>
        </v-col>
      </v-row>


      <v-row>
        <v-col md="4">
          <v-checkbox
              v-model="formData.mouseSpermCryoKit"
              :label="'Mouse Sperm Cryopreservation Kit'"
          ></v-checkbox>
        </v-col>
        <v-col md="4">
          <v-text-field
              v-model="formData.spermCryoQuantity"
              label="Quantity"
              solo
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="8">
          <p class="text-left">
            1 Sperm Cryopreservation kit is enough for cryopreserving 20 male mice. See
            <a
                href="https://projects.mousebiology.org/documents/1497622365.pdf"
                target="_blank"
            >Sperm Cryo Kit Protocol<br></a>
          </p>

          <p class="text-left">
            Sperm Cryopreservation kit should be stored at -20°C and used within 2 months of receipt.
          </p>
        </v-col>
      </v-row>>
    </v-container>

    <contact
      :contactData.sync="formData.contactData"
      @updateKitContact="updateKitContact"
    ></contact>

    <BillingInformation
      :billingInformationData.sync="formData.billingInformationData"
      @updateKitBillingInformation="updateKitBillingInformation"
    ></BillingInformation>

    <PaymentInformation
      :paymentInformationData.sync="formData.paymentInformationData"
      @updateKitPaymentInformation="updateKitPaymentInformation"
    ></PaymentInformation>


  </v-form>
</template>

<script>

import contact from './ContactInformation';
import PaymentInformation from "./PaymentInformation";
import BillingInformation from "./BillingInformation";


export default {
  name: "KitRequestForm",
  props:["kitRequestForm"],

  data: () => ({
    formData: {
      mouseIVFKit: null,
      ivfKitQuantity: null,
      mouseSpermCryoKit: null,
      spermCryoQuantity: null,

      contactData: {},
      paymentInformationData: {},
      billingInformationData: {},
    }
  }),
  components:{
    contact,
    PaymentInformation,
    BillingInformation,
  },
  methods: {
    updateKitContact: function(contactInfo){
      this.$data.formData.contactData = contactInfo;
    },

    updateKitPaymentInformation: function(paymentInfo){
      this.$data.formData.paymentInformationData = paymentInfo;
    },

    updateKitBillingInformation: function(billingInfo){
      this.$data.formData.billingInformationData = billingInfo;
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <form>
    <v-container>
      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Rederivation, Cryopreservation, and Recovery Services Request Form
        </h2>
      </v-col>
    </v-container>

    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="4" md="4">
          <v-checkbox
            v-model="formData.rederivationSelect"
            label="Rederivation"
            color="blue"
            ></v-checkbox>
        </v-col>

        <v-col cols="12" sm="4" md="4">
          <v-checkbox
              v-model="formData.resuscitationSelect"
              label="Resuscitation"
              color="green"
          ></v-checkbox>
        </v-col>

        <v-col cols="12" sm="4" md="4">
          <v-checkbox
              v-model="formData.cryopreservationSelect"
              label="Cryopreservation"
              color="orange"
          ></v-checkbox>
        </v-col>

      </v-row>
    </v-container>

    <v-divider color="black"></v-divider>

    <v-container>
      <v-col
          class="mb-5"
          cols="12"
      >
        <h2 class="font-weight-bold">
          Strain Information
        </h2>
      </v-col>
    </v-container>

    <v-container fluid>
      <v-row>
        <v-col cols="2">
          <v-subheader>Strain Name:</v-subheader>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="formData.strainName"
          ></v-text-field>
        </v-col>

        <v-col cols="3">
          <v-subheader>If KO, ES cell line identification:</v-subheader>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="formData.esCellLnID"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-subheader>Genetic Background of Strain (C57BL/6J etc):</v-subheader>
        </v-col>
        <v-col cols="2">
          <v-text-field
            v-model="formData.strainGeneticBackg"
          ></v-text-field>
        </v-col>

        <v-col cols="3">
          <v-subheader>Backcross Generation (if applicable):</v-subheader>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="formData.backcrossGeneration"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-subheader>Genotype (homo, hetero, KO, Tg, ENU, etc):</v-subheader>
        </v-col>
        <v-col cols="2">
          <v-text-field
              v-model="formData.genotype"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="3">
          <v-subheader>Phenotype of affected mice:</v-subheader>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="formData.affectedMicePhenotype"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row>
      <v-col cols="3">
        <v-subheader class="font-weight-bold">Which genotypes are affected?</v-subheader>
      </v-col>

      <v-col cols="6">
      <v-radio-group v-model="formData.affectedGenotypes" row>
        <v-radio
          label="Heterozygotes"
          value="heterozygotes"
        ></v-radio>
        <v-radio
          label="Homozygotes"
          value="homozygotes"
        ></v-radio>
        <v-radio
          label="Both"
          value="both_homo_heterozygotes"
        ></v-radio>
        <v-radio
          label="Unknown"
          value="unknown"
        ></v-radio>
      </v-radio-group>
      </v-col>
      </v-row>
       <v-row>
         <v-col cols="3">
           <v-subheader class="font-weight-bold">Is mutation/phenotype sex-linked?</v-subheader>
         </v-col>
         <v-col cols="6">
           <v-radio-group
             v-model="formData.sex_linked"
             row
           >
             <v-radio
               label="Yes"
               value="yes"
             ></v-radio>
             <v-radio
               label="No"
               value="no"
             ></v-radio>
           </v-radio-group>
         </v-col>
       </v-row>
    </v-container>


    <v-expansion-panels focusable multiple>
      <v-expansion-panel>
        <v-expansion-panel-header color="blue">Rederivation</v-expansion-panel-header>
        <v-expansion-panel-content>
          <Rederivation_MICLService
            :rederivationServiceData.sync="formData.rederivationServiceData"
            @updateRederivationServiceData = "updateRederivationServiceData"
          ></Rederivation_MICLService>

        </v-expansion-panel-content>
      </v-expansion-panel>


      <v-expansion-panel>
        <v-expansion-panel-header color="green">Resuscitation</v-expansion-panel-header>
        <v-expansion-panel-content>
          <Resuscitation_MICLService
              :resuscitationServiceData.sync="formData.resuscitationServiceData"
              @updateResuscitationServiceData = "updateResuscitationServiceData"
          ></Resuscitation_MICLService>
        </v-expansion-panel-content>
      </v-expansion-panel>


      <v-expansion-panel>
        <v-expansion-panel-header color="orange">Cryopreservation</v-expansion-panel-header>
        <v-expansion-panel-content>
          <Cryopreservation_MICLService
              :cryopreservationServiceData.sync="formData.cryopreservationServiceData"
              @updateCryopreservationServiceData = "updateCryopreservationServiceData"
          ></Cryopreservation_MICLService>
        </v-expansion-panel-content>
      </v-expansion-panel>


    </v-expansion-panels>

    <contact
        :contactData.sync="formData.contactData"
        @updateMICLServiceContact="updateMICLServiceContact"
    ></contact>

    <BillingInformation
      :billingInformationData.sync="formData.billingInformationData"
      @updateMICLServiceBillingInformation="updateMICLServiceBillingInformation"
    ></BillingInformation>

    <PaymentInformation
      :paymentInformationData.sync="formData.paymentInformationData"
      @updateMICLServicePaymentInformation="updateMICLServicePaymentInformation"
    ></PaymentInformation>

    <v-btn @click="submit" color="primary">
      Send Form
    </v-btn>
  </form>
</template>

<script>
import Rederivation_MICLService from "./Rederivation_MICLService";
import Resuscitation_MICLService from "./Resuscitation_MICLService";
import Cryopreservation_MICLService from "./Cryopreservation_MICLService";
import contact from './ContactInformation';
import PaymentInformation from "./PaymentInformation";
import BillingInformation from "./BillingInformation";

export default {
  name: "miclServicesInformation",

  data: () => ({
    formData:{
      rederivationSelect: null,
      resuscitationSelect: null,
      cryopreservationSelect: null,
      strainName: null,
      esCellLnID: null,
      strainGeneticBackg: null,
      backcrossGeneration: null,
      genotype: null,
      affectedMicePhenotype: null,
      affectedGenotypes: null,
      sex_linked: null,

      rederivationServiceData: {},
      resuscitationServiceData: {},
      cryopreservationServiceData: {},

      contactData: {},
      paymentInformationData: {},
      billingInformationData: {}
    }
  }),

  components:{
    Rederivation_MICLService,
    Resuscitation_MICLService,
    Cryopreservation_MICLService,
    contact,
    PaymentInformation,
    BillingInformation
  },

  methods: {

    updateRederivationServiceData: function(rederivationInfo){
      this.$data.formData.rederivationServiceData=rederivationInfo;
    },

    updateResuscitationServiceData: function(resuscitationInfo){
      this.$data.formData.resuscitationServiceData=resuscitationInfo;
    },

    updateCryopreservationServiceData: function(cryoInfo){
      this.$data.formData.cryopreservationServiceData=cryoInfo;
    },

    updateMICLServiceContact: function (contactInfo){
      this.$data.formData.contactData = contactInfo;
    },
    updateMICLServicePaymentInformation: function(paymentInfo){
      this.$data.formData.paymentInformationData = paymentInfo;
    },
    updateMICLServiceBillingInformation: function(billingInfo){
      this.$data.formData.billingInformationData = billingInfo;
    },

    submit: function(){
      const formData= JSON.stringify(this.$data.formData);
      console.log(formData);
    },

  }
}
</script>

<style scoped>

</style>
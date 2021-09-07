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
            v-model="rederivationSelect"
            label="Rederivation"
            color="blue"
            ></v-checkbox>
        </v-col>

        <v-col cols="12" sm="4" md="4">
          <v-checkbox
              v-model="resuscitationSelect"
              label="Resuscitation"
              color="green"
          ></v-checkbox>
        </v-col>

        <v-col cols="12" sm="4" md="4">
          <v-checkbox
              v-model="cryopreservationSelect"
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
            v-model="strainName"
          ></v-text-field>
        </v-col>

        <v-col cols="3">
          <v-subheader>If KO, ES cell line identification:</v-subheader>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="esCellLnID"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-subheader>Genetic Background of Strain (C57BL/6J etc):</v-subheader>
        </v-col>
        <v-col cols="2">
          <v-text-field
            v-model="strainGeneticBackg"
          ></v-text-field>
        </v-col>

        <v-col cols="3">
          <v-subheader>Backcross Generation (if applicable):</v-subheader>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="backcrossGeneration"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-subheader>Genotype (homo, hetero, KO, Tg, ENU, etc):</v-subheader>
        </v-col>
        <v-col cols="2">
          <v-text-field
              v-model="genotype"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="3">
          <v-subheader>Phenotype of affected mice:</v-subheader>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="affectedMicePhenotype"
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
      <v-radio-group v-model="affectedGenotypes" row>
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
             v-model="sex_linked"
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

        </v-expansion-panel-content>
      </v-expansion-panel>


      <v-expansion-panel>
        <v-expansion-panel-header color="orange">Cryopreservation</v-expansion-panel-header>
        <v-expansion-panel-content>

        </v-expansion-panel-content>
      </v-expansion-panel>


    </v-expansion-panels>


  </form>
</template>

<script>
import Rederivation_MICLService from "./Rederivation_MICLService";

export default {
  name: "miclServicesInformation",

  data: () => ({
    formData:{
      rederivationServiceData: {},
    }
  }),

  components:{
    Rederivation_MICLService
  },

  methods: {
    updateRederivationServiceData: function(rederivationInfo){
      this.$data.formData.rederivationServiceData=rederivationInfo;
    }
  }
}
</script>

<style scoped>

</style>
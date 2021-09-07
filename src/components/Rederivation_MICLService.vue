<template>
  <v-form>
  <v-row>
    <v-col cols="3">
      <p class="text-center text-decoration-underline font-weight-bold">
        Procedure
      </p>
      <v-checkbox
          v-model="formData.homozygRederivation"
          label="Homozygous Rederivation"
          value="homozygRederivation"
      ></v-checkbox>
      <v-checkbox
          v-model="formData.heterozygRederivation"
          label="Heterozygous Rederivation"
          value="heterozygRederivation"
      ></v-checkbox>
    </v-col>

    <v-col cols="3">
      <p class="text-center text-decoration-underline font-weight-bold">
        Required number of animals
      </p>
      <br>
      <p>2-3 males, 10-15 females</p>
      <br>
      <p>2-3 males (hom or het)</p>
    </v-col>
  </v-row>

  <v-list-item three-line>
    <v-list-item-content>
      <v-list-item-title class="font-weight-bold text-left">Notes:</v-list-item-title>
      <v-list-item-subtitle class="text-left">
        Rederivation service includes up to two IVF procedures, embryo transfers into four pseudopregnant recipients, and housing of born mice for up to 7 weeks.
      </v-list-item-subtitle>
      <v-list-item-subtitle class="text-left">
        The optimal male age is 10-20 weeks old, and the optimal female age is 3-4 weeks old.
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>

  <v-row>
    <v-subheader class="font-weight-bold v-size--large">How many mice will you be sending?</v-subheader>
    <v-col cols="3">
      <v-text-field
          solo
          dense
          v-model="formData.amntofMiceSent"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row>

    <v-subheader class="font-weight-bold">Please indicate if you prefer to:</v-subheader>

    <v-col cols="6">
      <v-radio-group
          v-model="formData.rederivationPreference"
          row
      >
        <v-radio
            label="Pool sperm from 2 males"
            value="poolSperm"
        ></v-radio>
        <v-radio
            label="Maintain progeny specificity (not pool sperm)"
            value="notPoolSperm"
        ></v-radio>
      </v-radio-group>
    </v-col>
  </v-row>
  <v-row>
    <p class="font-italic sm5 font-weight-light">
      *For homozygous rederivation, we highly recommend pooling sperm from 2 males to increase the fertilization rate.
    </p>
  </v-row>

  <v-row>
    <v-subheader class="font-weight-bold">
      Any special husbandry requirements for the mice you are sending?
    </v-subheader>
  </v-row>
  <v-row>
    <v-col cols="3">
      <v-radio-group
          v-model="formData.rederivHusbandryRequirements"
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

    <v-col cols="2">
      <v-subheader class="font-weight-bold">If yes, please specify:</v-subheader>
    </v-col>
    <v-col>
      <v-text-field
          v-model="formData.specialHusbReq"
      ></v-text-field>
    </v-col>

  </v-row>




  <v-row>
    <v-subheader class="font-weight-bold">
      Any known or suspected reproductive or fertility problems?
    </v-subheader>
  </v-row>
  <v-row>
    <v-col cols="3">
      <v-radio-group
          v-model="formData.reprFertProblems"
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

    <v-col cols="2">
      <v-subheader class="font-weight-bold">If yes, please specify:</v-subheader>
    </v-col>
    <v-col>
      <v-text-field
          v-model="formData.fertProblemDescr"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row>
    <v-subheader class="font-weight-bold">
      If you would like the MBP to order WT female donors, please specify the preferred background strain and vendor below.
    </v-subheader>
  </v-row>
  <v-row>
    <v-col cols="1">
      <v-subheader class="font-weight-bold">Strain:</v-subheader>
    </v-col>
    <v-col cols="4">
      <v-text-field v-model="formData.strainMBPtoOrder"></v-text-field>
    </v-col>

    <v-col cols="1">
      <v-subheader class="font-weight-bold">Vendor:</v-subheader>
    </v-col>
    <v-col cols="4">
      <v-text-field v-model="formData.vendorMBPtoContact"></v-text-field>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="1">
      <v-subheader class="font-weight-bold">Genetic Background:</v-subheader>
    </v-col>
    <v-col cols="4">
      <v-text-field v-model="formData.geneBackgfromSupplier"></v-text-field>
    </v-col>

    <v-col cols="1">
      <v-subheader class="font-weight-bold">Genotype:</v-subheader>
    </v-col>
    <v-col cols="4">
      <v-text-field v-model="formData.genofromSupplier"></v-text-field>
    </v-col>
  </v-row>

  <v-row>
    <v-subheader class="font-weight-bold">
      Please note that we pool oocytes from female donors. If this is not acceptable, please let us know by checking the box below.
    </v-subheader>
  </v-row>
  <v-row>
    <v-col>
      <v-checkbox
          color="red"
          v-model="formData.noPoolOocytes"
          :label="'No pool oocytes from female donors'"
      ></v-checkbox>
    </v-col>
  </v-row>

</v-form>
</template>

<script>
export default {
  name: "Rederivation_MICLService",

  data: () => ({
    formData: {
      homozygRederivation: null,
      heterozygRederivation: null,
      amntofMiceSent: null,
      rederivationPreference: null,
      rederivHusbandryRequirements: null,
      specialHusbReq: null,
      reprFertProblems: null,
      fertProblemDescr: null,
      strainMBPtoOrder: null,
      vendorMBPtoContact: null,
      geneBackgfromSupplier: null,
      genofromSupplier: null,
      noPoolOocytes: null,
    }
  }),
   methods:{
    update() {
      this.$emit("updateRederivationServiceData",this.$data.formData)
    }
   },
}
</script>

<style scoped>

</style>
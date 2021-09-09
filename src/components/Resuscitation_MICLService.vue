<template>
  <v-form>

    <v-container fluid>
      <v-row>
        <v-col cols="3">
          <p class="text-center text-decoration-underline font-weight-bold">
            Procedure
          </p>
          <v-checkbox
              v-model="formData.spermResuscitation"
              label="Sperm Resuscitation"
              value="spermResuscitation"
          ></v-checkbox>
          <v-checkbox
              v-model="formData.embryoResuscitation"
              label="Embryo Resuscitation"
              value="embryoResuscitation"
          ></v-checkbox>
          <v-checkbox
              v-model="formData.icsiRescue"
              label="ICSI Rescue"
              value="icsiRescue"
          ></v-checkbox>
        </v-col>

        <v-col cols="4">
          <p class="text-center text-decoration-underline font-weight-bold">
            Required number of animals
          </p>

          <p>2 sperm vials/straws</p>
          <br>
          <p>2 embryo straws</p>
          <br>
          <p>2 sperm vials/straws</p>
        </v-col>
      </v-row>
    </v-container>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold text-left">Notes:</v-list-item-title>
        <v-list-item-subtitle class="text-left">
          Sperm resuscitation service includes up to two IVF procedures, embryo transfers into up to four pseudopregnant recipients, and housiing of born mice for up to 7 weeks.
        </v-list-item-subtitle>
        <v-list-item-subtitle class="text-left">
          Embryo resuscitation service includes embryo transfers into up to four pseudopregnant recipients and housing of born mice for up to 7 weeks.
        </v-list-item-subtitle>
        <v-list-item-subtitle class="text-left">
          ICSI rescue service includes up to two ICSI procedures, embryo transfers into up to four pseudopregnant recipients, and housing of born mice for up to 7 weeks.
        </v-list-item-subtitle>
        <v-list-item-subtitle class="text-left">
          For non-MBP-generated samples, please provide the cryopreservation and thawing protocol for cryopreserved sperm or embryos.
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-row>
      <v-col>
        <p class="font-weight-bold heading text-left">Sperm Resuscitation or ICSI Rescue</p>
      </v-col>
    </v-row>
    <v-divider color="black"></v-divider>

    <v-container fluid>
      <v-row>
        <v-col cols="3">
          <v-text-field
              v-model="formData.geneBackgrnd"
              label="Genetic Background:"
              filled
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="formData.volPerSample"
            label="Volume (μl) per sample:"
            filled
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              v-model="formData.dateofCryopreservation"
              label="Date of Cryopreservation:"
              filled
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="3">
          <v-text-field
            v-model="formData.preferredOocyteDonorStrain"
            label="Preferred Oocyte Donor Strain:"
            filled
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="formData.concentration"
            label="Concentration (M/ml):"
            filled
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="formData.dobMaleUsed"
            label="DOB of Male Used:"
            filled
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-text-field
            v-model="formData.numOfVials"
            label="Number of Vials to be Shipped:"
            filled
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
          v-model="formData.spermSampleIDs"
          label="Sample IDs (if known):"
          filled
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="7">
          <p>In addition to the samples to be shipped, do other cryopreserved samples exist for this line of mice?</p>
        </v-col>
        <v-col cols="3">
          <v-radio-group row v-model="formData.spermICSI_otherCryopreserves">
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

    <v-row>
      <v-col>
        <p class="font-weight-bold heading text-left">Embryo Resuscitation</p>
      </v-col>
    </v-row>
    <v-divider color="black"></v-divider>

    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="formData.embryoStage"
            label="Embryo Stage:"
            hint="(i.e. 2-cell, 8-cell, morula, blastocyst)"
            filled
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="formData.numOfStraws"
            label="Number of Straws to be Shipped:"
            filled
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="formData.embryoSampleIDs"
            label="Sample IDs (if known):"
            filled
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="formData.numofEmbryos"
            label="Number of Embryos per Straw:"
            filled
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="7">
          <p>In addition to the samples to be shipped, do other cryopreserved samples exist for this line of mice?</p>
        </v-col>
        <v-col cols="3">
          <v-radio-group row v-model="formData.embryo_otherCryopreserves">
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

  </v-form>

</template>

<script>
export default {
  name: "Resuscitation_MICLService",

  data: ()=> ({
    formData: {
      spermResuscitation: null,
      embryoResuscitation: null,
      icsiRescue: null,
      geneBackgrnd: null,
      volPerSample: null,
      dateofCryopreservation: null,
      preferredOocyteDonorStrain: null,
      concentration: null,
      dobMaleUsed: null,
      numOfVials: null,
      spermSampleIDs: null,
      spermICSI_otherCryopreserves: null,
      embryoStage: null,
      numOfStraws: null,
      embryoSampleIDs: null,
      numofEmbryos: null,
      embryo_otherCryopreserves: null
    }
  }),

  methods:{
    update() {
      this.$emit("updateResuscitationServiceData",this.$data.formData)
    }
  },
}
</script>

<style scoped>

</style>
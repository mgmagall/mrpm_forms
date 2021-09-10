<template>
  <v-form>
    <v-container fluid>
      <v-row>
        <v-col cols="3">
          <p class="text-center text-decoration-underline font-weight-bold">
            Procedure
          </p>
          <v-checkbox
              v-model="formData.spermCryopreservation"
              label="Sperm Cryopreservation"
              value="spermCryopreservation"
          ></v-checkbox>
          <v-checkbox
              v-model="formData.heteroEmbryoCryopreservation"
              label="Heterozygous Embryo Cryopreservation"
              value="heteroEmbryoCryopreservation"
          ></v-checkbox>
          <v-checkbox
              v-model="formData.homoEmbryoCryopreservation"
              label="Homozygous Embryo Cryopreservation"
              value="homoEmbryoCryopreservation"
          ></v-checkbox>
        </v-col>

        <v-col cols="4">
          <p class="text-center text-decoration-underline font-weight-bold">
            Required number of animals
          </p>

          <p>2-3 males (hom or het)</p>
          <br>
          <p>2-3 males (hom or het)</p>
          <br>
          <p>2-3 males, 10-15 females</p>
        </v-col>
      </v-row>
      <v-row>
        <v-checkbox
          v-model="formData.additionalStorage"
          label="Additional Storage: To archive your lines at the MBP for more than 1 year (we will contact you to determine length of storage desired)."
          value="additionalStorage"
        ></v-checkbox>
      </v-row>
    </v-container>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold text-left">Notes:</v-list-item-title>
        <v-list-item-subtitle class="text-left">
          Sperm cryopreservation service includes the sperm cryopreservation of 2 males and the storage of the cryopreserved materials for one year.
        </v-list-item-subtitle>
        <v-list-item-subtitle class="text-left">
          Embryo cryopreservation service includes up to two IVF procedures, the cryopreservation of up to 300 embryos, and the storage of cryopreserved materials for one year.
        </v-list-item-subtitle>
        <v-list-item-subtitle class="text-left">
          The optimal male age is 10-20 weeks old, and the optimal female age is 3-4 weeks old.
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-container fluid>
      <v-row>
        <v-subheader class="font-weight-bold v-size--large">How many mice will you be sending?</v-subheader>
        <v-col cols="3">
          <v-text-field
              solo
              dense
              v-model="formData.amntofMiceSent_Cryo"
          ></v-text-field>
        </v-col>
      </v-row>

    </v-container>

    <v-container fluid>
      <v-row>
        <v-subheader class="font-weight-bold">
          Any special husbandry requirements for the mice you are sending?
        </v-subheader>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-radio-group
              v-model="formData.rederivHusbandryRequirements_Cryo"
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
              v-model="formData.specialHusbReq_Cryo"
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
              v-model="formData.reprFertProblems_Cryo"
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
              v-model="formData.fertProblemDescr_Cryo"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-row>
      <v-col>
        <p class="font-weight-bold heading text-left">Embryo Cryopreservation Options</p>
      </v-col>

    </v-row>
    <v-divider color="black"></v-divider>

    <v-container fluid>
      <v-row>

        <v-subheader class="font-weight-bold">Please indicate if you prefer to:</v-subheader>

        <v-col cols="6">
          <v-radio-group
              v-model="formData.embryoCryoOptions"
              row
          >
            <v-radio
                label="Pool sperm from 2 males"
                value="twoMales"
            ></v-radio>
            <v-radio
                label="Use 1 male for initial IVF attempt"
                value="oneMale"
            ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <p class="font-italic sm5 font-weight-light">
          *For homozygous embryo cryopreservation, we highly recommend pooling sperm from 2 males to increase the fertilization rate.
        </p>
      </v-row>
    </v-container>

    <v-container fluid>
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
          <v-text-field v-model="formData.strainMBPtoOrder_Cryo"></v-text-field>
        </v-col>

        <v-col cols="1">
          <v-subheader class="font-weight-bold">Vendor:</v-subheader>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="formData.vendorMBPtoContact_Cryo"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-subheader class="font-weight-bold">
          If investigator is supplying the female donors, please indicate their genetic background and genotype(s).
        </v-subheader>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-subheader class="font-weight-bold">Genetic Background:</v-subheader>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="formData.geneticBackgfromSupplier_Cryo"></v-text-field>
        </v-col>

        <v-col cols="1">
          <v-subheader class="font-weight-bold">Genotype:</v-subheader>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="formData.genofromSupplier_Cryo"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <p class="font-italic sm5 font-weight-light">
          Please note that we pool oocytes from female donors. If female progeny specificity is required, please complete a request form for each genotype.
        </p>
        <!-- Something to look into implementing here on the form itself (Monica) -->
      </v-row>
    </v-container>

    <v-row>
      <v-col>
        <p class="font-weight-bold heading text-left">Optional Test Thaw Quality Control Services (Sperm)</p>
      </v-col>

    </v-row>
    <v-divider color="black"></v-divider>

    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <p class="font-weight-bold text-decoration-underline">Procedure</p>
          <v-radio-group v-model="formData.optionalTestThawQCSSperm">
            <v-radio
                value="testThawtoCulture"
                label="Test Thaw to Culture (thaw one vial and perform IVF to assess fertilization rate and blastocyst formation rate)"
            ></v-radio>
            <v-radio
              value="testThawtoLivePups"
              label="Test Thaw to Live Pups (thaw one vial and perform IVF and transfer embryos into one female recipient to asses birth rate*)"
            ></v-radio>
            <v-radio
              value="none"
              label="None"
            ></v-radio>
          </v-radio-group>
          <p class="v-size--small">*Embryo transfers are performed at our clean barrier facility.</p>
        </v-col>
      </v-row>
    </v-container>



    <v-row>
      <v-col>
        <p class="font-weight-bold heading text-left">Optional Test Thaw Quality Control Services (Embryos)</p>
      </v-col>

    </v-row>
    <v-divider color="black"></v-divider>

    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <p class="font-weight-bold text-decoration-underline">Procedure</p>
          <v-radio-group v-model="formData.optionalTestThawQCSEmbryos">
            <v-radio
                value="testThawtoCulture"
                label="Test Thaw to Culture (thaw one straw and culture to blastocyst to assess formation rate)"
            ></v-radio>
            <v-radio
                value="testThawtoLivePups"
                label="Test Thaw to Live Pups (thaw one straw and transfer embryos into one female recipient to assess birth rate*)"
            ></v-radio>
            <v-radio
                value="none"
                label="None"
            ></v-radio>
          </v-radio-group>
          <p class="v-size--small">*Embryo transfers are performed at our clean barrier facility.</p>
        </v-col>
      </v-row>
    </v-container>

  </v-form>
</template>

<script>
export default {
  name: "Cryopreservation_MICLService",

  data: () =>({
    formData: {

    }
  }),
  methods: {
    update() {
      this.$emit("updateCryopreservationServiceData",this.$data.formData)
    }
  }
}
</script>

<style scoped>

</style>
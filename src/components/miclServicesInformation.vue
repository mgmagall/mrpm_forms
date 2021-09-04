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


    <v-expansion-panels focusable>
      <v-expansion-panel>
        <v-expansion-panel-header color="blue">Rederivation</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
          <v-col cols="3">
            <p class="text-center text-decoration-underline font-weight-bold">
              Procedure
            </p>
            <v-checkbox
              v-model="homozygRederivation"
              label="Homozygous Rederivation"
              value="homozygRederivation"
            ></v-checkbox>
            <v-checkbox
                v-model="heterozygRederivation"
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
              v-model="amntofMiceSent"
            ></v-text-field>
            </v-col>
          </v-row>

          <v-row>

              <v-subheader class="font-weight-bold">Please indicate if you prefer to:</v-subheader>

            <v-col cols="6">
              <v-radio-group
                  v-model="rederivationPreference"
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
                  v-model="rederivHusbandryRequirements"
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
                v-model="specialHusbReq"
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
                  v-model="reprFertProblems"
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
                  v-model="fertProblemDescr"
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
              <v-text-field v-model="strainMBPtoOrder"></v-text-field>
            </v-col>

            <v-col cols="1">
              <v-subheader class="font-weight-bold">Vendor:</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="vendorMBPtoContact"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="1">
              <v-subheader class="font-weight-bold">Genetic Background:</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="geneBackgfromSupplier"></v-text-field>
            </v-col>

            <v-col cols="1">
              <v-subheader class="font-weight-bold">Genotype:</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="genofromSupplier"></v-text-field>
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
              v-model="noPoolOocytes"
              :label="'No pool oocytes from female donors'"
            ></v-checkbox>
            </v-col>
          </v-row>

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
export default {
  name: "miclServicesInformation"
}
</script>

<style scoped>

</style>
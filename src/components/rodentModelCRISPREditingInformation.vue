
<!--CONSIDER combining this form with the other CRISPR form -->

<template>
  <v-form>
    <v-container>
      <v-col
          class="mb-5"
          cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Rodent Model Generation by CRISPR/Cas9 Gene Editing -- Request Form
        </h2>
      </v-col>
    </v-container>

    <v-container fluid>
      <v-row>
        <v-col cols="1">
          <v-subheader class="font-weight-bold">Date:</v-subheader>
        </v-col>
        <v-col cols="2">
          <v-text-field v-model="formData.date"></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-subheader class="font-weight-bold">MBP#</v-subheader>
        </v-col>
        <v-col cols="2">
          <v-text-field v-model="formData.mbpNumber"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="1">
          <v-subheader class="font-weight-bold">Gene Name:</v-subheader>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="formData.geneName"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-subheader class="font-weight-bold">MGI or NCBI Number(specify:)</v-subheader>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="formData.mgi_ncbiNumber"></v-text-field>
          <!--change to allow user to choose which number to input (Monica) -->
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <v-subheader class="font-weight-bold">
            Briefly describe your research objectives and project requirements:
          </v-subheader>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <v-textarea auto-grow v-model="formData.researchObj_projRequirements"></v-textarea>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>

      <v-radio-group v-model="formData.mutationType">
        <template v-slot:label>
          <div><strong>Mutation Type:</strong></div>
        </template>
        <v-radio value="Indel">
          <template v-slot:label>
            <div><strong>Insertion/Deletion (Indel)</strong><br>
              The CRISPR/Cas9 (Clustered Regularly Interspaced Short Palindromic Repeat/CRISPR associated) system facilitates guide RNA (gRNA)
              directed targeting to specific DNA sequence in the genome and induces a Double Strand Break (DSB). This results in the cells repair
              mechanism to undergo Non-Homologous End Joining (NHEJ) which is error prone and will include small Insertions and/or Deletions
              (InDels). This can result in a frameshift of the gene reading frame and ultimately create a nonsense transcript and or multiple STOP sites on
              the mRNA transcript. The result is an allele with a global KO of the targeted gene.
            </div>
          </template>

        </v-radio>
        <v-radio value="exdelKO">
          <template v-slot:label>
            <div><strong>Exon Knockout (exdel KO)</strong><br>
              By targeting two loci (in cis configuration) with a Double Strand Break (DSB), it is possible to completely remove a critical exon (or exons)
              for purposes of specific domain removal. The DSBs may also result in downstream frameshift mutations resulting in Nonsense Mediated
              Decay (NMD) of the mRNA transcript.
            </div>
          </template>
        </v-radio>
        <v-radio value="cKO_cKI">
          <template v-slot:label>
            <div><strong>cKO or cKI with Homologous Recombination-Research and Development</strong><br>
              By synthesizing a vector containing a floxed allele and short (~1Kb) arms of homology to the endogenous allele, and by injecting this and
              guide RNA and CRISPR CAS9 into zygotes, we can generate cKO and cKI alleles in the mouse strain of your choice. At this time such a
              project would be entered into as Research and Development (R&D) project for which we would act as an extension of your lab, billing you
              monthly from project initiation to project completion.
            </div>
          </template>
        </v-radio>
        <v-radio value="snpGeneration">
          <template v-slot:label>
            <div><strong>SNP Generation-Research and Development</strong><br>
              At this time such a project would be entered into as Research and Development (R&D) project for which we would act as an extension of
              your lab, billing you monthly from project initiation to project completion
            </div>
          </template>
        </v-radio>
        <v-radio value="other">
          <template v-slot:label>
            <div><strong>OTHER</strong>, R&D Project, briefly describe<br></div>
            <v-textarea v-model="formData.other_mutationType"></v-textarea>

          </template>
        </v-radio>
      </v-radio-group>
    </v-container>

    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <v-select
              v-model="formData.backgroundStrain"
              :items="backgroundStrains"
              filled
              label="Background Strain:"
              dense
          ></v-select>
          <!--TODO: Add functionality to allow user input if 'Other' is selected, or change to radio buttons -->
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <p class="v-size--small font-italic">Listed are commonly used strains. Use of other strains may require additional fees.</p>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <v-subheader class="font-weight-bold">Sequencing of Potential Off Target Loci(Optional)*:</v-subheader>
        </v-col>
        <v-col cols="4">
          <v-radio-group v-model="formData.sequencingOffTargetLoci" row>
            <v-radio
                value="no"
                label="No"
            ></v-radio>
            <v-radio
                value="yes"
                label="Yes-Predicted Only"
            ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <p class="v-size--small text-left">
          *In genotypically-confirmed F0 rodents, predicted off-target loci will be analyzed by PCR amplification and sequencing. If found, off-target
          mutations can often be segregated from the intended genetic mutation. Results of off-target analysis will be provided to the client as
          information to guide further breeding and genotyping.
        </p>
      </v-row>

    </v-container>

    <v-divider color="black"></v-divider>
    <!-- CONSIDER function to determine type of project -->
    <v-row>
      <v-col>
        <p class="font-weight-bold heading text-left">For Office Use Only:</p>
      </v-col>
    </v-row>
    <v-radio-group v-model="formData.projectType">
      <v-radio
        value="standardProject"
        label="Standard Project"
      ></v-radio>
      <v-radio
        value="rndProject"
        label="R&D Project"
      ></v-radio>
      <v-radio
        value="esCellTargeting"
        label="ES Cell Targeting"
      ></v-radio>
      <v-radio
        value="zygoteInjectionorElectroporation"
        label="Zygote Injection or Electroporation"
      ></v-radio>
    </v-radio-group>

  </v-form>
</template>

<script>
export default {
  name: "rodentModelCRISPREditingInformation",

  data: () => ({
    backgroundStrains: ['C57BL/6J','C57BL/6N','FVB/N','Other(enter here)'],
    formData:{
      date: null,
      mbpNumber: null,
      geneName: null,
      mgi_ncbiNumber: null,
      researchObj_projRequirements: null,
      mutationType: null,
      other_mutationType: null,
      backgroundStrain: null,
      sequencingOffTargetLoci: null,
      projectType: null
    }
  })
}
</script>

<style scoped>

</style>
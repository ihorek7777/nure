<script>
  import { mapGetters } from 'vuex'
  import SpecialitiesBachelorTab from './SpecialitiesBachelorTab'
  import SpecialitiesMasterTab from './SpecialitiesMasterTab'
  import SpecialitiesSecondEducationTab from './SpecialitiesSecondEducationTab'
  import { GETTERS, SPECIALITIES_PAGE } from '../../common'
  export default {
    name: 'TheSpecialities',
    components: { SpecialitiesBachelorTab, SpecialitiesMasterTab, SpecialitiesSecondEducationTab },
    data() {
      return {
        tabs: [{
          name: SPECIALITIES_PAGE.TABS.BACHELOR,
          component: SpecialitiesBachelorTab.name,
        }, {
          name: SPECIALITIES_PAGE.TABS.MASTER,
          component: SpecialitiesMasterTab.name,
        }, {
          name: SPECIALITIES_PAGE.TABS.SECOND_EDUCATION,
          component: SpecialitiesSecondEducationTab.name,
        }],
      }
    },
    created() {
      this.$scrollTo('.TheHeader', 700)
    },
    computed: {
      ...mapGetters({
        specialities: GETTERS.GET_SPECIALITIES,
      }),
    },
    methods: {},
  }
</script>

<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
    <section class="specialities">
      <v-tabs fixed centered>
        <v-toolbar class="default_grey-background specialities-toolbar" dark>
          <v-toolbar-title class="toolbar-title">
           Спеціальності та спеціалізаціі для вступу до ХНУРЕ
          </v-toolbar-title>
        </v-toolbar>
        <v-tabs-bar class="cyan specialities-tabs default_grey-background specialities-tabs" dark>
          <v-tabs-item
            v-for="tab in tabs"
            :key="tab.name"
            :href="'#' + tab.name"
            ripple>
            {{ tab.name }}
          </v-tabs-item>
          <v-tabs-slider color="white"></v-tabs-slider>
        </v-tabs-bar>

        <v-tabs-items>
          <v-tabs-content
            v-for="tab in tabs"
            :key="tab.name"
            :id="tab.name"
            lazy>
            <v-card flat>
              <v-card-text class="information-tab">
                <div :is="tab.component"/>
              </v-card-text>
            </v-card>
          </v-tabs-content>
        </v-tabs-items>
      </v-tabs>

      <div class="specialities-content">
        <h5>Умовні позначення:</h5>
        <ul>
          <li>У - Українська мова та література;</li>
          <li>М - Математика;</li>
          <li>Ф - Фізика;</li>
          <li>А - Атестат, середній бал;</li>
          <li>Х - Хімія;</li>
          <li>IМ - Іноземна мова;</li>
          <li>Б - Біологія;</li>
          <li>Г - Географія;</li>
          <li>П - Пiдкурси ХНУРЕ.</li>
        </ul>
        <h1 class="section-title">ФОРМИ І ТЕРМІНИ НАВЧАННЯ:</h1>
        <div class="info_specialities">
          <h5>Денна</h5>
          <ul class="info_text">
            <li>4 роки - бакалавр;</li>
            <li>1,5 або 2 роки - магістр.</li>
          </ul>
        </div>
        <div class="info_specialities">
          <h5>Заочна</h5>
          <ul class="info_text">
            <li>5 роки - бакалавр;</li>
            <li>1,5 або 2 роки - магістр з використанням технологій дистанційного навчання.</li>
          </ul>
        </div>

        <div class="info_specialities">
          <h5>Контрактна форма навчання:</h5>
          <ul class="info_text">
            <li>Можлива для всіх спеціальностей на будь-якої спеціалізації.</li>
          </ul>
        </div>

        <div class="info_specialities">
          <h5>Друга вища освіта:</h5>
          <ul class="info_text">
            <li>В університеті ХНУРЕ можливо отримати другу вищу освіту в Центрі післядипломної освіти (кімната 283, т.
              702-18-05) на контракті з двох або трирічним терміном навчання.
            </li>

          </ul>
        </div>

        <div class="info_specialities">
          <h5>
            Для вступу на навчання із скороченим терміном підготовки для отримання ступеня бакалавра приймаються особи,
            які отримали навчально-кваліфікаційний рівень молодшого спеціаліста:</h5>
          <ul class="info_text">
            <li>1-й (скорочений термін навчання);</li>
            <li>2-й курс з терміном навчання 3 роки;</li>
            <li> 3-1 курс з терміном навчання 2 роки.</li>
          </ul>
        </div>

        <div class="info_specialities">
          <h5>Студенти ХНУРЕ мають можливість:</h5>
          <ol class="info_text">
            <li> Навчатися на військовій кафедрі;</li>
            <li> Отримати європейський диплом за програмою подвійного дипломування;</li>
            <li> Брати участь в міжнародних стажуваннях і обмінах;</li>
            <li> Проживати в гуртожитку;</li>
            <li> Брати участь в студентських і спортивних клубах;</li>
            <li> Отримувати практичні навички в українських і міжнародних компаніях.</li>
          </ol>
        </div>
      </div>
    </section>
  </transition>
</template>

<style scoped>

</style>

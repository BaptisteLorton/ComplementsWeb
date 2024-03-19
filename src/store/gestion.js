import { defineStore } from 'pinia'
import * as OrganisationService from '@/service/org.service'
import * as TeamService from "@/service/team.service";
import * as HeroService from "@/service/hero.service";

export const useGestionStore = defineStore({
    state: () => ({
        mdpOrganisation: null,
        currentHero: null,
        currentTeam: null,
        currentOrganisation: null,
        heroes: [],
        teams: [],
        organisations: [],
        auth: false,
    }),
    getters: {
    },
    actions: {
        updateMdpOrganisation(mdpOrganisation) {
            this.mdpOrganisation = mdpOrganisation
        },
        updateOrganisations(organisations) {
            this.organisations = organisations
        },
        updateCurrentOrganisation(organisation) {
            this.currentOrganisation = organisation
            this.auth = true
        },
        updateTeams(teams) {
            this.teams = teams
        },
        updateCurrentTeam(team) {
            this.currentTeam = team
        },
        updateHeroes(heroes) {
            this.heroes = heroes
        },
        updateCurrentHero(hero) {
            this.currentHero = hero
        },
        async getOrganisationById({id, password}) {
            const response = await OrganisationService.getOrganisationByID(id, password)
            if (response.error === 0) {
                this.updateCurrentOrganisation(response.data[0])
            } else {
                this.errors.pushError(response.data)
            }
        },
        async getOrganisations() {
            const response = await OrganisationService.getOrganisations()
            if (response.error === 0) {
                this.updateOrganisations(response.data)
            } else {
                console.log(response.data)
            }
        },
        async createOrganisation(data) {
            const response = await OrganisationService.createOrganisation(data)
            if (response.error === 0) {
                this.updateOrganisations(response.data)
            } else {
                console.log(response.data)
            }
        },
        async addTeamToOrganisation({idTeam, Orgpassword}) {
            const response = await OrganisationService.addTeamToOrganisation(idTeam, Orgpassword)
            if (response.error === 0) {
                this.updateOrganisations(response.data)
            } else {
                console.log(response.data)
            }
        },
        async removeTeamToOrganisation({idTeam, Orgpassword}) {
            const response = await OrganisationService.removeTeamToOrganisation(idTeam, Orgpassword)
            if (response.error === 0) {
                this.updateOrganisations(response.data)
            } else {
                console.log(response.data)
            }
        },
        async getTeams() {
            const response = await TeamService.getTeams()
            if (response.error === 0) {
                this.updateTeams(response.data)
            } else {
                console.log(response.data)
            }
        },
        async createTeam(data) {
            const response = await TeamService.createTeam(data)
            if (response.error === 0) {
                this.updateTeams(response.data)
            } else {
                console.log(response.data)
            }
        },
        async addHeroesToTeam(data) {
            const response = await TeamService.addHeroesToTeam(data)
            if (response.error === 0) {
                this.updateTeams(response.data)
            } else {
                console.log(response.data)
            }
        },
        async removeHeroesToTeam(data) {
            const response = await TeamService.removeHeroesToTeam(data)
            if (response.error === 0) {
                this.updateTeams(response.data)
            } else {
                console.log(response.data)
            }
        },
        async getHeroes() {
            const response = await HeroService.getHeroes()
            if (response.error === 0) {
                this.updateHeroes(response.data)
            } else {
                console.log(response.data)
            }
        },
        async createHero(data) {
            const response = await HeroService.createHero(data)
            if (response.error === 0) {
                this.updateHeroes(response.data)
            } else {
                console.log(response.data)
            }
        },
        async updateHero(data, Orgpassword) {
            const response = await HeroService.updateHero(data, Orgpassword)
            if (response.error === 0) {
                this.updateHeroes(response.data)
            } else {
                console.log(response.data)
            }
        },
        async getHeroByID(id, Orgpassword) {
            const response = await HeroService.getHeroByID(id, Orgpassword)
            if (response.error === 0) {
                this.updateCurrentHero(response.data)
            } else {
                console.log(response.data)
            }
        },
    }
})
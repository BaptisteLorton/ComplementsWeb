import { postRequest, getRequest, patchRequest } from "@/service/axios.service";

async function getTeams() {
    return getRequest('/teams/get',null,'GETTEAMS')
}

async function createTeam(name) {
    return postRequest('/teams/create',name,'CREATETEAM')
}

async function addHeroesToTeam(data) {
    return patchRequest('/teams/addheroes',data,'ADDHEROESTOTEAM')
}

async function removeHeroesToTeam(data) {
    return patchRequest('/teams/removeheroes',data,'REMOVEHEROESTOTEAM')
}

export{
    getTeams,
    createTeam,
    addHeroesToTeam,
    removeHeroesToTeam,
}
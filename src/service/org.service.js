import { postRequest, getRequest, patchRequest } from "@/service/axios.service";

async function getOrganisations() {
    return getRequest('/orgs/get',null,'GETORGANISATIONS')
}

async function createOrganisation(data) {
    return postRequest('/orgs/create',data,'CREATEORGANISATION')
}

async function addTeamToOrganisation(idTeam, Orgpassword) {
    return patchRequest('/orgs/addteam?org-secret='+Orgpassword,{idTeam: idTeam},'ADDTEAMTOORGANISATION')
}

async function removeTeamToOrganisation(idTeam, Orgpassword) {
    console.log(idTeam, Orgpassword)
    return patchRequest('/orgs/removeteam?org-secret='+Orgpassword, {idTeam: idTeam}, 'REMOVETEAMTOORGANISATION')
}

async function getOrganisationByID(id, Orgpassword) {
    return getRequest('/orgs/getbyid/'+id+'?org-secret='+Orgpassword, null, 'GETORGANISATIONBYID')
}

export{
    getOrganisations,
    createOrganisation,
    addTeamToOrganisation,
    removeTeamToOrganisation,
    getOrganisationByID
}
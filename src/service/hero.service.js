import { postRequest, getRequest, putRequest } from "@/service/axios.service";

async function getHeroes() {
    return getRequest('/heroes/getaliases',null,'GETHEROESALIASES')
}

async function createHero(data) {
    return postRequest('/heroes/create',data,'CREATEHERO')
}

async function updateHero(data, Orgpassword) {
    return putRequest('/heroes/update?org-secret='+Orgpassword,data,'UPDATEHERO')
}

async function getHeroByID(id, Orgpassword) {
    return getRequest('/heroes/getbyid/'+id+'?org-secret='+Orgpassword, null, 'GETHEROBYID')
}

export{
    getHeroes,
    createHero,
    updateHero,
    getHeroByID,
}
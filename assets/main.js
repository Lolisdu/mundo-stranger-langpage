
import { subscribeToHellfireClub } from "./Firebase/hellfire-clube.js"


const txtNome = document.getElementById('txtNome')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        nome: txtNome.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    const subscriptionId = await subscribeToHellfireClub(subscription)
    console.log('Inscrito com Sucesso: ${subscriptionId}')

    txtNome.value = ""
    txtEmail.value = ""
    txtLevel.value = ""
    txtCharacter.value = ""

    alert('Inscrito com Sucesso: ${subscriptionId}')
})

async function loadData() {
    const subscription = await getHellfireClubSubscription()
    console.log(subscription)
}

loadData()




const conflict = (resource = "Item") => {
    return {
        type: "conflict",
        message: `${resource} já existe!`
    }
}

const invalidId = () => {
    return {
        type: "invalid",
        message: `ID inválido! Deve ser um número inteiro maior que zero.`
    }
}

const invalidName = (Item = "Nome") => {
    return {
        type: "invalid",
        message: `${Item} inválido! Deve ter tem mais de 2 e menos de 100 caracteres.`
    }
}

const invalidDate = (Item = "") => {
    return {
        type: "invalid",
        message: `Data ${Item} inválida! Não pode ser uma data anterior à atual.`
    }
}

const invalidDate2 = (item) => {
    return {
        type: "invalid",
        message: `Problemas com a ${item}!`
    }
}

const notFound = (resource = "Item") => {
    return {
        type: "notFound",
        message: `${resource} não encontrado!`
    }
}

const sameCities = () => {
    return {
        type: "conflict",
        message: `Os id's de origem e destino são iguais!`
    }
}

const incompleteData = () => {
    return {
        type: "incompleteData",
        message: `Preencha todos os dados!`
    }
}

const joiError = (message) => {
    return {
        type: "joiError",
        message: message
    }
};

const error = {
    conflict,
    invalidId,
    invalidName,
    invalidDate,
    invalidDate2,
    notFound,
    sameCities,
    incompleteData,
    joiError
}

export default error;
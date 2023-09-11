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

const notFound = (resource = "Item") => {
    return {
        type: "notFound",
        message: `${resource} não encontrado!`
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
    notFound,
    incompleteData,
    joiError
}

export default error;
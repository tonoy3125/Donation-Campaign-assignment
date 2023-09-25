const getStoredCardApplication = () => {
    const storedCardApplictaion = localStorage.getItem('card-applictaions')
    if (storedCardApplictaion) {
        return JSON.parse(storedCardApplictaion)
    }
    return []
}

const saveCardApplication = id => {
    const storedCardApplication = getStoredCardApplication()
    const exists = storedCardApplication.find(cardId => cardId === id)
    if (!exists) {
        storedCardApplication.push(id)
        localStorage.setItem('card-applictaions', JSON.stringify(storedCardApplication))
    }
}

export { getStoredCardApplication, saveCardApplication }
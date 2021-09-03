
export const goToLogin = (history) => {
    history.pushState("/")
}

export const goToCadastro = (history) => {
    history.pushState("/cadastro")
}

export const goToFeed = (history) => {
    history.pushState("/feed")
}

export const goToPost
 = (history , id) => {
    history.pushState(`/post/${id}`)
}

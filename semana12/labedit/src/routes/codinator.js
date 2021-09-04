
export const goToHome = (history) => {
    history.push("/")
}

export const goToLogin = (history) => {
    history.push("/login")
}

export const goToFeed = (history) => {
    history.push("/feed")
}

export const goToPost
 = (history , id) => {
    history.push(`/post/${id}`)
}

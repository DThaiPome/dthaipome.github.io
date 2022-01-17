const getters = {
    homeText: () => [
        'This website serves as a compilation of worthwhile projects that I have worked on, either as a member of my team or completely on my own. Click any of the featured projects below to read about them. Depending on the project, there may also be an online demo available!',
        'You can find all of my projects here, as well as my resume. Feel free to reach out - my contact info is at the bottom of the page!'
    ]
};

const store = {
    namespaced: true,
    getters
};

export default store;
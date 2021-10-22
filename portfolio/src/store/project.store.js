const projects = [
    {
        title: 'Trail of Crumbs',
        imgSrc: require('@/assets/img/projects/Trail_Of_Crumbs.png'),
        id: 'trail_of_crumbs',
        blurb: '3D Collab Game Project',
        bodyComp: 'a',
        featured: true,
        summary: 'Summary!',
        responsibilities: [
            'Stuff A',
            'Stuff B'
        ],
        tech: [
            'TEcg A',
            'Tec B'
        ],
        bodyImgSrcA: require('@/assets/img/projects/Trail_Of_Crumbs.png'),
        bodyImgSrcB: require('@/assets/img/projects/Trail_Of_Crumbs.png')
    },
    {
        title: 'Antithesis',
        imgSrc: require('@/assets/img/projects/Antithesis.png'),
        id: 'antithesis',
        blurb: 'Large Studio VR Project',
        bodyComp: 'b',
        summary: 'Summary!',
        responsibilities: [
            'Stuff A',
            'Stuff B'
        ],
        tech: [
            'TEcg A',
            'Tec B'
        ],
        bodyImgSrcA: require('@/assets/img/projects/Antithesis.png'),
        bodyImgSrcB: require('@/assets/img/projects/Antithesis.png'),
        featured: true
    },
    {
        title: 'Fillball',
        imgSrc: require('@/assets/img/projects/Fillball.png'),
        id: 'fillball',
        blurb: 'Self-driven 3D Game in UE4',
        bodyComp: 'c',
        summary: 'Summary!',
        responsibilities: [
            'Stuff A',
            'Stuff B'
        ],
        tech: [
            'TEcg A',
            'Tec B'
        ],
        bodyImgSrcA: require('@/assets/img/projects/Fillball.png'),
        bodyImgSrcB: require('@/assets/img/projects/Fillball.png')
    },
    {
        title: 'Narcoleptic Nummies',
        imgSrc: require('@/assets/img/projects/Narcoleptic_Nummies.png'),
        id: 'narcoleptic_nummies',
        blurb: 'GMTK Game Jam 2020',
        bodyComp: 'b',
        summary: 'Summary!',
        responsibilities: [
            'Stuff A',
            'Stuff B'
        ],
        tech: [
            'TEcg A',
            'Tec B'
        ],
        bodyImgSrcA: require('@/assets/img/projects/Narcoleptic_Nummies.png'),
        bodyImgSrcB: require('@/assets/img/projects/Narcoleptic_Nummies.png')
    },
];

const state = {
    projects
};

const getters = {
    projects: state => {
        return state.projects;
    }
};

const store = {
    namespaced: true,
    state,
    getters
};

export default store;